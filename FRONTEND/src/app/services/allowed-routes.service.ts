import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import * as jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AllowedRoutesService {

  private routes = new BehaviorSubject([]);
  currentRoutes = this.routes.asObservable();

  constructor(private router: Router, private _snackBar: MatSnackBar) {
    this.updateRoutes();
  }

  changeRoutes(newRoutes: Array<any>) {
    this.routes.next(newRoutes);
  }

  updateRoutes() {
    const token = localStorage.getItem('token');
    const components = [{ path: 'event', label: 'Events' }];
    if (!token) {
      components.push({ path: 'login', label: 'Login' });
      components.push({ path: 'register', label: 'Register' });

      this.routes.next(components);
      return;
    }
    const decodedToken = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;
    if (currentTime > decodedToken.exp) {
      components.push({ path: 'login', label: 'Login' });
      components.push({ path: 'register', label: 'Register' });
      this.router.navigate(['/login']);
      this._snackBar.open('Login first', '', { duration: 1000 });
      return false;
    }

    decodedToken.roles.forEach(role => {
      if (role.authority === 'ROLE_USER') {
        components.push({
          path: 'profile',
          label: `User: ${decodedToken.sub}`
        });
      } else if (role.authority === 'ROLE_ADMIN') {
        components.push({
          path: 'add-event',
          label: 'Add Event'
        });
        components.push({
          path: 'locations',
          label: 'Locations'
        });
        components.push({
          path: 'add-location',
          label: 'Add Location'
        });
        components.push({
          path: 'profile',
          label: `Admin: ${decodedToken.sub}`
        });
      } else {
        components.push({ path: 'login', label: 'Login' });
        components.push({ path: 'register', label: 'Register' });
        localStorage.removeItem('token');
        this.routes.next(components);
        return;
      }
    });
    this.routes.next(components);
  }
}

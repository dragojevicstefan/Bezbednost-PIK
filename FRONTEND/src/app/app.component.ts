import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from './services/user.service';
import {AuthService} from "./services/auth.service";
import {AllowedRoutesService} from "./services/allowed-routes.service";
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver,
    private userService: UserService,
    private authService: AuthService,
    private allowedRoutes: AllowedRoutesService
    ) {
  }

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map((result) => result.matches),
        shareReplay()
      );

      public isNone() {
          if (localStorage.getItem('token') === null || localStorage.getItem('token') === undefined) {
            return true;
        }return false;
      }

      public isAdmin() {
        return this.authService.isAdmin();
      }
      public isUser(){
        return this.authService.isUser();
      }
      public onLogout() {
        this.authService.logout();
      }

}

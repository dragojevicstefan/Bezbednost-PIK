import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import * as jwt_decode from 'jwt-decode';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private router: Router,) {}

  login(email: string, password: string) {
    return this.http.post(`${environment.baseUrl}/api/login`, { email: email, password: password }, { responseType: 'text' });
  }

  register(

    email: string,
    password: string
  ) {
    return this.http.post(
      `${environment.baseUrl}/api/register`,
      {
        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }

  registerAdmin(

    email: string,
    password: string
  ) {
    return this.http.post(
      `${environment.baseUrl}/api/registerAdmin`,
      {
        email: email,
        password: password,
      },
      { responseType: 'text' }
    );
  }
  // profile() {
  //   return this.http.get<UserProfile>(`${environment.apiUrl}/api/profile`);
  // }
  //
  // updateProfile(user: UserProfile) {
  //   console.log(user);
  //   return this.http.put<UserProfile>(
  //     `${environment.apiUrl}/api/updateProfile`,
  //     { email: user.email, firstName: user.firstName, lastName: user.lastName }
  //   );
  // }
  //
  // changePassword(changePassword: ChangePassword) {
  //   console.log(changePassword);
  //   return this.http.put<UserProfile>(`${environment.apiUrl}/api/reset`, {
  //     password1: changePassword.password1,
  //     password2: changePassword.password2
  //   });
  // }

  getEmail(){
    const token = localStorage.getItem('token');
    if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined){
      return false;
    }
    const decodedToken = jwt_decode(token);
    return decodedToken.sub;
  }

  isAdmin() {
    let isAdmin = false;
    const token = localStorage.getItem('token');
      if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined){
        return false;
      }
    const decodedToken = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;
    if (currentTime > decodedToken.exp) {
      return isAdmin;
    }
    decodedToken.roles.forEach(role => {
      if (role.authority === 'ROLE_ADMIN') {
        isAdmin = true;
      }
    });
    return isAdmin;
  }

  isUser() {
    let isAdmin = false;
    const token = localStorage.getItem('token');
   // console.log(token);
      if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined){
        return false;
      }
    const decodedToken = jwt_decode(token);
    const currentTime = new Date().getTime() / 1000;
    if (currentTime > decodedToken.exp) {
      return isAdmin;
    }
    decodedToken.roles.forEach(role => {
      if (role.authority === 'ROLE_USER') {
        isAdmin = true;
      }
    });
    return isAdmin;
  }

  logout(){
    const token = localStorage.getItem('token');
      if(localStorage.getItem('token') === null || localStorage.getItem('token') === undefined){
        return false;
      }
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      console.log('izlogovan');
  }

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Role } from '../models/role';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {UserTokenState} from '../models/userTokenState';
import {LoginRequest} from '../models/loginRequest';

export const TOKEN='LoggedInUser';

@Injectable({
    providedIn:'root'
})
export class UserService{

  accessToken = null;
  request: UserTokenState;
  loggedInUser: Observable<UserTokenState>;
  loggedInUserSubject: BehaviorSubject<UserTokenState>;

  constructor(private router: Router, private httpClient: HttpClient) {
    // this.loggedInUserSubject = new BehaviorSubject<UserTokenState>(JSON.parse(localStorage.getItem('user')));
    // this.loggedInUser = this.loggedInUserSubject.asObservable();
  }

  // login(loginRequest: LoginRequest) {
  //   return this.httpClient.post('http://localhost:8081/api/auth/login', loginRequest).pipe(map((response: UserTokenState) => {
  //     this.accessToken = response.accessToken;
  //     localStorage.setItem('user', JSON.stringify(response));
  //     this.loggedInUserSubject.next(response);
  //   }));
  // }
  //
  // getToken() {
  //   return this.accessToken;
  // }
  //
  // getLoggedInUser() {
  //   return this.loggedInUserSubject.value;
  // }
  //
  // isLoggedIn() {
  //   return localStorage.getItem('user') != null;
  // }
  //
  // logout() {
  //   localStorage.removeItem('user');
  //   this.accessToken = null;
  //   this.router.navigate(['/']);
  // }
  //   urlUser = environment.baseUrl + environment.user;
  //   users: Array<User>=new Array<User>();
  //   user:User= new User('', '', Role.NONE);
  //   u:User;
  //   us:User;
  //   constructor(private router: Router, private http: HttpClient) {
  //     this.getAllUsers();
  //
  //     localStorage.setItem(TOKEN, JSON.stringify(this.user));
  //   }
  //
  //   public addUser(u: User){
  //     if (this.getUser(u.username) === null) {
  //       this.users.push(u);
  //     }
  //   }
  //
  //   public setLoggedUser(user: User) {
  //     this.user = user;
  //   }
  //
  //   public getLoggedUser() {
  //     return this.user;
  //   }
  //
  // public getUser(username: string) {
  //   if ( this.users.length === 0) {
  //     return null;
  //   }
  //   for (const u of this.users) {
  //     if ( u.username === username) {
  //       return u;
  //     }
  //   }
  //   return null;
  // }
  //
  //   public setToken(user){
  //       this.user=user;
  //       localStorage.setItem(TOKEN, JSON.stringify(this.user));
  //
  //   }
  //
  //   public isLoggedIn() {
  //       if(localStorage.getItem(TOKEN)!==null){
  //         return localStorage.getItem(TOKEN);
  //       }else {
  //
  //         return null;
  //       }
  //     }
  //
  //     public setUser(u: User) {
  //
  //       for (const p1 of this.users) {
  //         if (p1.username === u.username) {
  //           p1.password = u.password;
  //           return;
  //         }
  //       }
  //     }
  //
  //   public logout(){
  //     this.router.navigate(['']);
  //     this.user =  new User('', '', Role.NONE);
  //     localStorage.removeItem(TOKEN);
  //     localStorage.setItem(TOKEN, JSON.stringify(this.user));
  //   }
  //
  //   public isNone() {
  //     if (this.isLoggedIn()) {
  //       return this.user.role === Role.NONE;
  //     }
  //   }
  //
  //   public isAdmin() {
  //       if (this.isLoggedIn()) {
  //         return this.user.role === Role.ADMIN;
  //       }
  //     }
  //
  // public isClient() {
  //   if (this.isLoggedIn()) {
  //     return this.user.role === Role.CLIENT;
  //   }
  // }
  //     public getAllUsers(): Array<User> {
  //       this.http.get(this.urlUser + '/all').subscribe((data: User[]) => {
  //           for (const c of data) {
  //               console.log(c);
  //               this.u = new User(c.username, c.password, this.whichRole(c.role.toString()));
  //               this.addUser(this.u);
  //           }
  //         },
  //         error => {
  //           console.log(error);
  //         }
  //       );
  //       console.log(this.users);
  //       return this.users;
  //     }
  //
  //     public whichRole(role: string) {
  //       if (role === 'ADMIN') {
  //         return Role.ADMIN;
  //       } else if(role ==='CLIENT') {
  //         return Role.CLIENT}
  //       else{
  //           return null;
  //         }
  //       }
  //
  // public login(user) {
  //   return this.http.post(environment.baseUrl + '/login', user, {responseType: 'text'});
  // }

  // public login(user): User {
  //     us= new User('','',
  //       );
  //   this.http.get(environment.baseUrl + '/login', user).subscribe((data:User) => {
  //
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  //   return
  // }


}

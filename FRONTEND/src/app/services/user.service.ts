import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { Role } from '../models/role';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

export const TOKEN='LoggedInUser';

@Injectable({
    providedIn:'root'
})
export class UserService{
    urlUser = environment.baseUrl + environment.user;
    users: Array<User>=new Array<User>();
    user:User= new User('', '', Role.NONE);
    u:User;
    constructor(private router: Router, private http: HttpClient) {
      this.getAllUsers();
      localStorage.setItem(TOKEN, JSON.stringify(this.user));
    }

    public addUser(u: User){
      if (this.getUser(u.username) === null) {
        this.users.push(u);
      }
    }

    public setLoggedUser(user: User) {
      this.user = user;
    }
  
    public getLoggedUser() {
      return this.user;
    }
    
  public getUser(username: string) {
    if ( this.users.length === 0) {
      return null;
    }
    for (const u of this.users) {
      if ( u.username === username) {
        return u;
      }
    }
    return null;
  }

    public setToken(user){
        this.user=user;
        localStorage.setItem(TOKEN, JSON.stringify(this.user));

    }

    public isLoggedIn() {
        if(localStorage.getItem(TOKEN)!==null){
          return localStorage.getItem(TOKEN);
        }else {
          
          return null;
        }
      }

      public setUser(u: User) {

        for (const p1 of this.users) {
          if (p1.username === u.username) {
            p1.password = u.password;
            return;
          }
        }
      }

    public logout(){
      this.router.navigate(['']);
      this.user =  new User('', '', Role.NONE);
      localStorage.removeItem(TOKEN);
      localStorage.setItem(TOKEN, JSON.stringify(this.user));
    }

    public isNone() {
      if (this.isLoggedIn()) {
        return this.user.role === Role.NONE;
      }
    }
    
    public isAdmin() {
        if (this.isLoggedIn()) {
          return this.user.role === Role.ADMIN;
        }
      }

      public getAllUsers(): Array<User> {
        this.http.get(this.urlUser + '/all').subscribe((data: User[]) => {
            for (const c of data) {
                this.u = new User(c.username, c.password, this.whichRole(c.role.toString()));
                this.addUser(this.u);
            }
          },
          error => {
            console.log(error);
          }
        );
        console.log(this.users);
        return this.users;
      }

      public whichRole(role: string) {
        if (role === 'ADMIN') {
          return Role.ADMIN;
        } else {
          return null;
        }
    
      }

    }

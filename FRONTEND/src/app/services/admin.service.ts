import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Admin } from '../models/admin';
import { UserService } from './user.service';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  urlAdmin = environment.baseUrl + environment.admin;
  listAdmins: Array<Admin>= new Array<Admin>();
  admin:Admin;
  tmp: Array<Admin>;

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) {
    this.getAllAdmins();
  }

  public loginAdmin(admin) {
    this.userService.setToken(admin);
    return this.http.post(environment.baseUrl + '/login', admin, {responseType: 'text'});
  }

  public addAdmin(p: Admin) {
    if(this.getAdmin(p.username)===null){
      this.listAdmins.push(p);
    }
  }
  
  public getAdmin(username: string) {
    if ( this.listAdmins.length === 0) {
      return null;
    }
    for (const u of this.listAdmins) {
      if ( u.username === username) {
        return u;
      }
    }
    return null;
  }


  public getAllAdmins(): Array<Admin> {
    this.http.get(this.urlAdmin + '/all').subscribe((data: Admin[]) => {
        for (const c of data) {
          this.admin = new Admin(c.username,c.password);
          this.addAdmin(this.admin);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listAdmins;
  }


}

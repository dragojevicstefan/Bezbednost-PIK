import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';
import { Role } from 'src/app/models/role';

export class LoginUser {
  constructor(
    public email: string,
    public password: string
  ) {}
}
@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {

  public loginForm: FormGroup;
  public submitted = false;
  private user:User;
  private loginUser:LoginUser;
  

  constructor(
    private adminService: AdminService,
    public formBuilder: FormBuilder,
    public router: Router,
    private userService: UserService,

  ) { }

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username: ['',[Validators.required]],
      password: ['',Validators.required]
    })
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted=true;

    if(this.loginForm.invalid)
    return;
  

  this.loginUser=new LoginUser(
    this.f.username.value,
    this.f.password.value
  )
    this.user=this.userService.getUser(this.f.username.value);
    this.attemptLogin();
  }

  public attemptLogin() {
    if (this.user.role === Role.ADMIN && this.loginUser.password === this.user.password) {
      console.log(this.user);
      this.adminService.loginAdmin(this.user).subscribe(
        data => {
          console.log(data);
          if (data !== null) {
            console.log('Successful logged in');
            this.router.navigate(['/admin/home']);
          } else {
            alert('Wrong username or password.');
            console.log('Login error');
          }
        },
        error => {
          alert('Wrong username or password.');
          console.log(error);
        }
      );
    } 
  }
}


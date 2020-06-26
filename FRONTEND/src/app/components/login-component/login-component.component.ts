import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {AllowedRoutesService} from '../../services/allowed-routes.service';
import {LogModel} from "../../models/logModel";
import {LogType} from "../../models/logType";
import {LogService} from "../../services/log.service";


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})

export class LoginComponentComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private allowedRoutes: AllowedRoutesService,
    private snackBar: MatSnackBar,
    private logService: LogService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const val = this.form.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password).subscribe(
        token => {
          localStorage.setItem('token', token);
          const logModel= new LogModel(LogType.INFO, val.email, 'Successfull login',2);
          this.logService.addLog(logModel).subscribe();
          this.router.navigate(['/']);
          if(this.authService.isAdmin()){
            this.router.navigate(['/admin/home']);
          }else if(this.authService.isUser()){
            this.router.navigate(['/client/home']);
          }
      //    this.allowedRoutes.updateRoutes();
        },
        response => {
          try {
            const errorResponse = JSON.parse(response.error);
            let errorAlert = '';
            errorResponse.errors.forEach(err => {
              errorAlert += `${err.defaultMessage}\n`;
            });
            this.snackBar.open(errorAlert, '', { duration: 2000 });
          } catch (err) {
            this.snackBar.open(response.error, '', { duration: 2000 });
          }
        }
      );
    }
  }

  ngOnInit() {}
}


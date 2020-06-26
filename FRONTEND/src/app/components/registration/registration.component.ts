import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {Role} from '../../models/role';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.registerForm = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')
        ]),
      },
    );
  }

  ngOnInit() {}

  register() {
    const formValue = this.registerForm.value;

    if (this.registerForm.valid) {
      this.authService
        .register(
          formValue.email,
          formValue.password
        )
        .subscribe(
          response => {
            this._snackBar.open(response, '', {
              duration: 2000
            });
            this.router.navigate(['/login']);

          },
          response => {
            try {
              const errorResponse = JSON.parse(response.error);
              this._snackBar.open(errorResponse.message, '', {
                duration: 2000
              });
            } catch (err) {
              alert(response.error);
            }
          }
        );
    }
  }
}

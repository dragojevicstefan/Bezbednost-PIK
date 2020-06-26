import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-registration-admin',
  templateUrl: './registration-admin.component.html',
  styleUrls: ['./registration-admin.component.css']
})
export class RegistrationAdminComponent implements OnInit {
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
        .registerAdmin(
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

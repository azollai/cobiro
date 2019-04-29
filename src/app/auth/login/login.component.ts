import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginResponseModel } from '../model/login-response.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', Validators.required);

  constructor(private authService: AuthService,
              private router: Router,
              private matSnackbar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.authService.login(this.form.value)
        .subscribe((result: LoginResponseModel) => {
          this.router.navigate(['/site/list']);
        }, () => {
          this.matSnackbar.open('Invalid email and password combination', null, { duration: 2000 });
        });
  }

  private initForm() {
    this.form = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl
    });
  }
}

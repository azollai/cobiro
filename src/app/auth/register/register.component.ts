import { Component, OnInit } from '@angular/core';

import { countryList } from '../../utils/conf/country-list';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginResponseModel } from '../model/login-response.model';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {
  // normally it would be an autocomplete and the response would come from the server
  countryList = countryList;

  form: FormGroup;
  emailControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);
  firstNameControl = new FormControl('', Validators.required);
  lastNameControl = new FormControl('', Validators.required);
  countryControl = new FormControl('', Validators.required);

  constructor(private authService: AuthService,
              private router: Router,
              private matSnackbar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.authService.register(this.form.value)
        .subscribe((result: LoginResponseModel) => {
          this.router.navigate(['/site/list']);
        }, () => this.matSnackbar.open('Something went wrong', null, { duration: 2000 }));
  }

  private initForm() {
    this.form = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl,
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      country: this.countryControl
    });
  }
}

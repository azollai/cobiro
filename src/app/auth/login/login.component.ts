import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginResponseModel } from '../model/login-response.model';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  emailControl = new FormControl('', Validators.required);
  passwordControl = new FormControl('', Validators.required);

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.authService.login(this.form.value)
        .subscribe((result: LoginResponseModel) => {
          this.router.navigate(['/site/list']);
        });
  }

  private initForm() {
    this.form = new FormGroup({
      email: this.emailControl,
      password: this.passwordControl
    });
  }
}

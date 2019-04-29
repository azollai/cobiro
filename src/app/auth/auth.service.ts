import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterFormModel } from './model/register-form.model';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { LoginFormModel } from './model/login-form.model';
import { RegisterPayloadModel } from './model/register-payload.model';
import { environment } from '../../environments/environment';
import { LoginResponseModel } from './model/login-response.model';

@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private http: HttpClient) { }

  register(formValue: RegisterFormModel): Observable<any> {
    const body: RegisterPayloadModel = {
      company: '',
      country_code: formValue.country,
      email: formValue.email,
      first_name: formValue.firstName,
      last_name: formValue.lastName,
      mcc_id: '',
      password: formValue.password,
      source: '',
      website: ''
    };
    return this.http.post(`${environment.baseUrl}/register`, body)
               .pipe(
                 switchMap(() => this.login(body))
               );
  }

  login(formValue: LoginFormModel & RegisterPayloadModel): Observable<any> {
    const body: RegisterPayloadModel = {
      company: '',
      country_code: formValue.country_code || '',
      email: formValue.email,
      first_name: formValue.first_name || '',
      last_name: formValue.last_name || '',
      mcc_id: '',
      password: formValue.password,
      source: '',
      website: ''
    };
    return this.http.post(`${environment.baseUrl}/login`, body)
               .pipe(
                 tap((result: LoginResponseModel) =>
                   result.access_token ?
                     localStorage.setItem('token', `${result.token_type} ${result.access_token}`) :
                     () => {}
                 )
               );
  }

  logout(): Observable<void> {
    return this.http.delete(`${environment.baseUrl}/logout`)
        .pipe(
          tap((response: any) => !response ? localStorage.removeItem('token') : () => {})
        );

  }
}

import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Http Token interceptor is used to inject information into Http requests
 * It is provided into the root of the application, so is accessable to every component
 */
@Injectable({ providedIn: 'root' })
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  /**
   * Intercept every http call and provide an "Authorization" header with the value provided by the environment
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(token){
      const tokenReq = req.clone({
        headers: req.headers.set('Authorization', token)
      });
      return next.handle(tokenReq);
    }else{
      return next.handle(req);
    }
  }
}

import { LocalstorageService } from './auth/localstorage.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private localstorage :LocalstorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.localstorage.getToken();
    const isAPIUrl =request.url.startsWith(environment.apiURL);

    if(token && isAPIUrl){
      request = request.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      })
    }
    return next.handle(request);
    // .tap((event: HttpEvent<any>) => {
    //   if (event instanceof HttpResponse) {
    //     // do stuff with response if you want
    //   }
    // }, (err: any) => {
    //   if (err instanceof HttpErrorResponse) {
    //     if (err.status === 401) {
    //       // redirect to the login route
    //       // or show a modal
    //     }
    //   }
    // });
  }
}

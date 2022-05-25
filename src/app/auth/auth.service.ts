import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from './auth.model';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  APIURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  signIn(loginData: any): Observable<any> {
    return this.http.post<any>(
      `${this.APIURL}api/v1/user/login`,
      loginData
    );
  }

  signUp(registerData: User): Observable<User> {
    return this.http.post<User>(
      `${this.APIURL}api/v1/user/register`,
      registerData
    );
  }

  verify(loginData: User): Observable<User> {
    return this.http.post<User>(
      `${this.APIURL}api/v1/user/verifyEmail`,
      loginData
    );
  }

}

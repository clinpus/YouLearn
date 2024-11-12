import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../environments/environment';
import { LoginResult } from '../model/login.model';
import { Subscriber } from '../model/register.model';

@Injectable({
    providedIn:'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }

  loginUrl = environment.baseURL+'/Login/login'; 

  getLoginForecast() : Observable<LoginResult[]> {
    return this.http.get<LoginResult[]>(this.loginUrl);
  }

  loginSubscriber(subscriber: Subscriber): Observable<LoginResult> {
    return this.http.post<LoginResult>(this.loginUrl, subscriber);
  }

  getLoginResponse(params:any): Observable<LoginResult> {
    return this.http.get<LoginResult>(this.loginUrl, {params:params});
  }
 
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
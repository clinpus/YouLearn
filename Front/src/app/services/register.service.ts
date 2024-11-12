import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from './../../environments/environment';
import { RegisterResult, Subscriber } from '../model/register.model';


@Injectable({
    providedIn:'root'
})
export class RegisterService {
  constructor(private http: HttpClient) { }

  loginUrl = environment.baseURL+'/Subscriber/AddSubscriber'; 

  register() : Observable<RegisterResult[]> {
    return this.http.get<RegisterResult[]>(this.loginUrl);
  }

  registerSubscriber(subscriber:Subscriber): Observable<Subscriber> {
    return this.http.post<Subscriber>(this.loginUrl, subscriber);
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
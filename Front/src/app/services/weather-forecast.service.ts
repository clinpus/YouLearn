import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { WeatherForecast } from '../model/weatherForecast.model';
import { environment } from './../../environments/environment';

@Injectable({
    providedIn:'root'
})
export class WeatherForecastService {
  constructor(private http: HttpClient) { }

  weatherForecastUrl = environment.baseURL+'/WeatherForecast'; 

  getWeatherForecast() : Observable<WeatherForecast[]> {
    return this.http.get<WeatherForecast[]>(this.weatherForecastUrl);
  }

  getWeatherForecastResponse(): Observable<HttpResponse<WeatherForecast>> {
    return this.http.get<WeatherForecast>(this.weatherForecastUrl, { observe: 'response' });
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
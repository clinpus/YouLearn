import { Component } from '@angular/core';
import { WeatherForecast } from '../model/weatherForecast.model';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-weather-forecast',
  standalone: true,
  imports: [],
  templateUrl: './weather-forecast.component.html',
  styleUrl: './weather-forecast.component.css'
})
export class WeatherForecastComponent {


  constructor(private weatherForecastService: WeatherForecastService) { }

    config!: WeatherForecast;
    headers!: HttpHeaders;

    showWeatherForecastResponse() {
        this.weatherForecastService.getWeatherForecastResponse()
          // resp is of type `HttpResponse<Config>`
          .subscribe(resp => {
            // display its headers
            const keys = resp.headers.keys();
            //this.headers = keys.map(key => `${key}: ${resp.headers.get(key)}`);
      
            // access the body directly, which is typed as `Config`.
            //this.config = { ... resp.body };
          });
      }



}

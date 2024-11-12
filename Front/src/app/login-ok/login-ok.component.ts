import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherForecastService } from '../services/weather-forecast.service';

@Component({
  selector: 'app-login-ok',
  standalone: true,
  imports: [],
  providers:[WeatherForecastService],
  templateUrl: './login-ok.component.html',
  styleUrl: './login-ok.component.css'
})
export class LoginOKComponent implements OnInit {

  constructor(
    public router: Router,
    private _httpClient: HttpClient,
    private _weatherForecastService :WeatherForecastService
  ){
    //alert('test')
  }

  headers!: string[];
  body:any;

  ngOnInit() : void {

    this._weatherForecastService.getWeatherForecast().subscribe( resp => {
      let test = '';
    });

    /*
    this._weatherForecastService.getWeatherForecastResponse().subscribe( resp => {
      // display its headers
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);

      // access the body directly, which is typed as `Config`.
      this.body = resp.body;
    });
    */
  }

  


}

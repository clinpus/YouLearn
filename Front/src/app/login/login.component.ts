import { HttpClient, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { WeatherForecastService } from '../services/weather-forecast.service';
import { LoginResult } from '../model/login.model';
import { FormsModule } from '@angular/forms';
import { Subscriber } from '../model/register.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls:  ['./login.component.css', '../app.component.css']
})
export class LoginComponent {

  email: string = "YAM";
  password: string = "123";

  constructor(
    public router: Router,
    private _loginService: LoginService,
    private _weatherForecastService :WeatherForecastService
  ){
  }

  lgn? : LoginResult;

  ngOnInit() {
  }

  login(){

    const sbs: Subscriber = {
      Email : this.email,
      Password : this.password 
    };
    
    
    this._loginService.loginSubscriber(sbs).subscribe( res => {
      this.lgn = res;
      if (this.lgn != null && (this.lgn?.login == 'ok') ){
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/loginKO']);
      }
    });

    /*
    let params= new HttpParams().set('login', this.email)

    this._login.getLoginResponse(params).subscribe( res => {
          this.lgn = res;
      if (this.lgn.login == "ok"){
        this.router.navigate(['/loginOK']);
      } else {
        this.router.navigate(['/loginKO']);
      }
    });
    */
  }

  login_new(){

    this._weatherForecastService.getWeatherForecast().subscribe( resp => {
      let test = '';
    });

  }
}

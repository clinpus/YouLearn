import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';
import { Subscriber } from '../model/register.model';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, HomeComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../app.component.css']
})
export class RegisterComponent {

  Name!: string; 
  Email!: string; 
  Password!: string;
  IsActivatedSubscribeBTN!: boolean;

  registerResult?:Subscriber;

  constructor(
    public router: Router,
    private _registerService: RegisterService
  ){
  }

  OnChangeForm(event: any){
    if( this.Password  || this.Name == null  || this.Email == null) {
      this.IsActivatedSubscribeBTN = true;
    }
    else{
      this.IsActivatedSubscribeBTN = false;
    }
  }

  subscribe(){
    const sbs: Subscriber = {
      Name : this.Name,
      Email: this.Email,
      Password : this.Password 
    };
    
    this._registerService.registerSubscriber(sbs).subscribe( res => {
      this.registerResult = res;
      if (this.registerResult != null && (this.registerResult?.Id  > 0) ){
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/loginKO']);
      }
    });
  }

}

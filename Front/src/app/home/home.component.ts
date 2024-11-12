import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  _hide: boolean = true;

  constructor(
    public router: Router,
    private dataService: DataService
  ){
  }

  ngOnInit() {
    this.dataService.getData().subscribe(data => {
      this._hide = data;
    });
  }

  btHide(){
    this._hide=false;
  }

}

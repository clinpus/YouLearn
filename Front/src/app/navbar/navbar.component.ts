import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit{
  menuValue:boolean = false;
  menu_icon:string = "bi bi-list";

  constructor (
                public router: Router
              ){        
  }

  ngOnInit(): void {
  }
  
  openMenu(){
    this.menuValue = !this.menuValue;
    this.menu_icon = this.menuValue ? "bi bi-x" : "bi bi-list"
  }

  Home(){
  }

  About(){
    this.router.navigate(['about']);
  }
 
  closeMenu(){
    this.menuValue = false;
    this.menu_icon = "bi bi-list"
  }
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TopnavbarService } from '../services/topnavbar.service';
import { HomeComponent } from '../home/home.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-topnavbar',
  standalone: true,
  imports: [CommonModule ,FormsModule ],
  providers:[HomeComponent],
  templateUrl: './topnavbar.component.html',
  styleUrl: './topnavbar.component.css'
})
export class TopnavbarComponent {
  _hide: boolean = true;

  constructor(private elRef: ElementRef,
              private _serviceTopnavbar : TopnavbarService,
              private _homeComp : HomeComponent,
              private dataService: DataService
  ){
  }

  setData(val : boolean) {
    this.dataService.setData(val);
  }
 
  selected_language : string = 'US';
  language : string = 'English';

  selected_language_class : string = "flagstrap-icon flagstrap-us";
  showddl: boolean = false;
  
  clickEvent(){
      this.showddl = !this.showddl;
  }

  selectLanguage(value : any){
    this.selected_language = value.target.dataset['val'];
    if(this.selected_language)
    this.selected_language_class = "flagstrap-icon flagstrap-" + this.selected_language.toLowerCase() ;
    if(this.selected_language == 'US'){
      this.language = ' English';
    }
    else if(this.selected_language == 'ES'){
      this.language = ' Spanish';
    }
    else if(this.selected_language == 'IQ'){
      this.language = ' Arabic';
    }
    let elements = this.elRef.nativeElement.querySelectorAll('.selected_language');
    elements.forEach((element: any) => {
      element.textContent = this.language;
    });    
    this.showddl = !this.showddl;
    this._serviceTopnavbar.getLanguageData(this.selected_language);
  }

  login(){
    this.setData(false );
  }

}

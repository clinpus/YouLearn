import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private dataSubject = new BehaviorSubject<boolean>(true);
  
  setData(data: boolean) {
    //this._hide = data;
    this.dataSubject.next(data);
  }
  getData() {
    return this.dataSubject.asObservable();
    //return this._hide;
  }

}

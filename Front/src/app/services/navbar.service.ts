import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class navbarService {

    private _bookListUrl = 'https://www.googleapis.com/books/v1/volumes?q=extreme%20programming';

  
    constructor(private _httpClient: HttpClient) {
    }
    
    ngOnInit(): void {
      this._httpClient.get(this._bookListUrl);
    }
    
}
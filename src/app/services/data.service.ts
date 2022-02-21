import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient,
  ) { 

  }

  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .pipe( tap( post => {
        console.log(post);
        
      })
    );
  }
}

import { Injectable } from '@angular/core';
import {Http} from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class TestService {

  constructor( private http: Http) { }

  callApi(): Promise<any> {
    return this.http.get('http://localhost:8000/api/test')
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

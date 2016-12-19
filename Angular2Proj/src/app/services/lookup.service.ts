import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LookupService {
  constructor(public http:Http){

  }
  Countries: Array<any>;
  getCountries() {
   return [
     {name: "India",
      code: "IN" },
     {name: "United States",
       code: "USA"}
       ];
  };
  getCountriesFromApi():Observable<any>{
    return this.http.get('app/api/countries.json')
    .map(result=>result.json());
    };
}
import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

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
  getCountriesFromApi(){
    return this.http.get('app/api/countries.json')
          .toPromise()
          .then((response)=> response.json())
          .catch((errorResponse)=>errorResponse.json());
  };
}
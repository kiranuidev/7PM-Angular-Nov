import { Injectable } from '@angular/core';

@Injectable()
export class LookupService {
  Countries: Array<any>;
  getCountries() {
   return [
     {name: "India",
      code: "IN" },
     {name: "United States",
       code: "USA"}
       ];
  };

}

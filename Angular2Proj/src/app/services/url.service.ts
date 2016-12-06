import { Injectable } from '@angular/core';

@Injectable()

export class UrlService {
  Api ={
    CountriesUrl:"app/api/countries.json",
    WeatherUrl:"",
    registerUrl:"app/api/register",
    loginUrl:"app/api/loginUrl",
    WallMartUrl:""
  }
  getUrl(){
    return this.Api;
  }

}

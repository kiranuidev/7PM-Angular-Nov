import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {LookupService} from '../services/lookup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(rb:FormBuilder,public lookupService:LookupService) {
  
    this.registerForm = rb.group({
      'firstName':["kiran",Validators.required]
    });
   // this.Countries = lookupService.getCountries();
  }
 
  registerForm:FormGroup
  ngOnInit() {
    this.lookupService.getCountriesFromApi()
    .subscribe((response)=>{
      this.Countries= response.countries;
    });
    // .then(response=>{
    //   this.Countries = response.countries;
    //   console.log(response)
    // });
  }
  register= {
  FirstName:"",
  Gender:"M",
  Country:"IN"
  };
  Countries:Array<any>;
  selectedCountry:string;
registerUser(){
   console.log(this.register.FirstName);
}

 submitForm(form:any){
    console.log(form);
 }
  countrySelected(data){
    console.log(data);
  }
  
 }

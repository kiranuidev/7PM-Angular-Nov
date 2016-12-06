import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {LookupService} from '../services/lookup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
  constructor(rb:FormBuilder,lookupService:LookupService) {
   //define the form validators
    this.registerForm = rb.group({
      'firstName':["kiran",Validators.required]
    });
    this.Countries = lookupService.getCountries();
  }
 
  registerForm:FormGroup
  ngOnInit() {
  }
  register= {
  FirstName:"",
  Gender:"M",
  Country:"IN"
  };
  Countries:Array<any>;
  
registerUser(){
   console.log(this.register.FirstName);
}

 submitForm(form:any){
    console.log(form);
 }
}

import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    
  constructor(rb:FormBuilder) {
   //edfine the form validators
    this.registerForm = rb.group({
      'firstName':["kiran",Validators.required]
    });
  }
 
  registerForm:FormGroup
  ngOnInit() {
  }
  register= {
  FirstName:"",
  Gender:"M",
  Country:"IN"
  }

  Countries=[{name:"India",code:"IN"},
  {name:"United States",code:"USA"}];
registerUser(){
   console.log(this.register.FirstName);
}

 submitForm(form:any){
    console.log(form);
 }
}

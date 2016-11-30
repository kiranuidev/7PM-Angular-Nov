import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() {
  }
 
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

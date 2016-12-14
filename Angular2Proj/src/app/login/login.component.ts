import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public loginService:LoginService) {

   }
   login(){
      this.loginService.loggedIn();
     }
}
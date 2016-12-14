import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  constructor(public loginService:LoginService) {
   }
//  navItems:Array<String>
  navItems=["Home","Products","Login","Register"];

   ngOnInit(){
     this.loginService.getStatus().subscribe((result)=>{
       console.log(result);
     })
   }
}

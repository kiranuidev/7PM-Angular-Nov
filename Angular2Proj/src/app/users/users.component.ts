import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() pageName:String;
  showDetails=false;
  userDetail:any;
  constructor() { }

  ngOnInit() {
  }
 @Input()  Users:Array<any>;

 getUserDetails(item){
   this.showDetails = true;
   this.userDetail=item;
 }
 userUpdatedInformation(){
   console.log("Updated");
 }
}

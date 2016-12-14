import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent {
  @Input() userDetail:any
   @Output() updateDetails:EventEmitter<any>= new EventEmitter<any>()

updateUser(){
  this.updateDetails.next(this.userDetail);
}
}

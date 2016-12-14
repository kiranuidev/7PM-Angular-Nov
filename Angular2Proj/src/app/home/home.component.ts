import { Component, OnInit } from '@angular/core';
import {UsersComponent} from '../users/users.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heading="User List";
  applicationUsers =[
  {
    "_id": "58496de6b1067713f1f02bf5",
    "index": 0,
    "guid": "cc8f8b8f-e51b-420c-a4e8-50719b6465ff",
    "age": 34,
    "name": "Bettie Fitzgerald",
    "gender": "female",
    "company": "ACIUM",
    "email": "bettiefitzgerald@acium.com",
    "phone": "1234567890",
    "address": "724 Huntington Street, Kidder, New Mexico, 6812",
    "DateOfBirth": "2014-02-27"
  },
  {
    "_id": "58496de61b19d2e48a50cd6a",
    "index": 1,
    "guid": "b2efddf0-eeb6-4467-9ef3-da15eba666b5",
    "age": 25,
    "name": "Samantha Sanford",
    "gender": "female",
    "company": "EVENTAGE",
    "email": "samanthasanford@eventage.com",
    "phone": "2345678901",
    "address": "942 Whitty Lane, Bedias, Vermont, 6207",
    "DateOfBirth": "2015-06-19"
  },
  {
    "_id": "58496de6fdba84623a29ca5a",
    "index": 2,
    "guid": "bcc782d6-1204-4a0a-a028-857effb588b4",
    "age": 35,
    "name": "Dena Buck",
    "gender": "female",
    "company": "MAXEMIA",
    "email": "denabuck@maxemia.com",
    "phone": "1111111110",
    "address": "164 Cozine Avenue, Websterville, Alabama, 3611",
    "DateOfBirth": "2014-06-25"
  },
  {
    "_id": "58496de6a6740fabee031238",
    "index": 3,
    "guid": "8c592ed4-b086-4603-a9d8-3d6bc80dcec2",
    "age": 38,
    "name": "Jenkins Duke",
    "gender": "male",
    "company": "ZENTURY",
    "email": "jenkinsduke@zentury.com",
    "phone": "1234567891",
    "address": "767 Ralph Avenue, Freetown, Minnesota, 1981",
    "DateOfBirth": "2014-02-24"
  },
  {
    "_id": "58496de67f94a96a2ae8e370",
    "index": 4,
    "guid": "717cbe7c-d50c-47e4-8137-6919b7446ac1",
    "age": 36,
    "name": "Williams Carroll",
    "gender": "male",
    "company": "ANIXANG",
    "email": "williamscarroll@anixang.com",
    "phone": "1234567890",
    "address": "583 Ashland Place, Bradenville, Arizona, 4852",
    "DateOfBirth": "2015-11-02"
  }
];
  constructor() { }

  ngOnInit() {
  }

}

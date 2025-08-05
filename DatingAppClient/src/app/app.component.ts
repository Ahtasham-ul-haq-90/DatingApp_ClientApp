import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_service/account.service';
import { User } from './_models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'DatingAppClient';
  Users : any;
  constructor(private http : HttpClient,private AccountService:AccountService){};
ngOnInit() {
  this.setCurrentUser();
}
setCurrentUser(){
  const userJson = localStorage.getItem('user');
  const users = userJson ? JSON.parse(userJson) : null;

  this.AccountService.setCurrentUser(users);
}
}

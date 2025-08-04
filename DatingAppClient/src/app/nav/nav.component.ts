import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_service/account.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model:any={}
isloggedin = false;
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
login(){
  this.accountService.login(this.model).subscribe(response=>{
    console.log(response);
    this.isloggedin = true;
  },error =>{
    console.log(error)
  }
)
  ;
  
  console.log(this.model);
}  
logout(){
  this.isloggedin = false;
}
}

import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_service/account.service';
import { Observable } from 'rxjs';
import { User } from '../_models/User';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
   model:any={}
   
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    
  }
login(){
  this.accountService.login(this.model).subscribe(response=>{
  },error =>{
    console.log(error)
  }
)
  ;
  
  console.log(this.model);
}  
logout(){
  this.accountService.logout();
}

}

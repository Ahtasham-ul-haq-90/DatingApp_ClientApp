import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AccountService } from '../_service/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model:any={};
@Input() UserFromHomeComponent : any;
@Output() cancelRegister = new EventEmitter();
  constructor(private accountservice : AccountService) { }

  ngOnInit(): void {
  }
RegisterUser()
{
  this.accountservice.RegisterUser(this.model).subscribe(response =>{
console.log(response)
this.cancelRegister.emit(false);
  }, error => {

    console.log(error);
  });
}
Cancel(){
  this.cancelRegister.emit(false);
}
}

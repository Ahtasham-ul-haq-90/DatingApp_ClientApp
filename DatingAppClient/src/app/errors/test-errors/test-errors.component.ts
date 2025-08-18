import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:7053/api/';
  validationErrors : string[] =[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  get404error() {
    this.http.get(this.baseUrl + 'buggey/not-found').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
        this.validationErrors = error;
      }
    )
  }
  badrequest() {
    this.http.get(this.baseUrl + 'buggey/bad-request').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
        this.validationErrors = error;
      }
    )
  }
  auth() {
    this.http.get(this.baseUrl + 'buggey/auth').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
        this.validationErrors = error;
      }
    )
  }
  servererror() {
    this.http.get(this.baseUrl + 'buggey/server-error').subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
        this.validationErrors = error;
      }
    )
  }
  servererrors() {
    this.http.post(this.baseUrl + 'account/register',{}).subscribe(
      response => {
        console.log(response);
      }, error => {
        console.log(error);
        this.validationErrors = error;
      }
    )
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginusers: any = [];
  signupobj: any = {
    name: '',
    email: '',
    password: '',
  };
  loginobj: any = {
    email: '',
    password: ''
  };

  constructor() { }
  onlogin() {
    this.loginusers.push(this.loginobj);
    localStorage.setItem('loginusers', JSON.stringify(this.loginusers));
  }
  ngOnInit(): void {
  }

}

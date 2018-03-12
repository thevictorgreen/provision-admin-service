import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { DataService } from '../../services/data/data.service';

import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  showSuccess:boolean = false;
  showError:boolean = false;

  hideMessages() {
    this.showSuccess = false;
    this.showError = false;
  }

  user = {
    username: '',
    password: ''
  }

  loggedInUser:string;

  authRequest = {
    auth: {
      "username":'',
      "password":''
    }
  }

  authResult:any;

  message:string;

  constructor(private router: Router, public loginService:LoginService, private dataService:DataService) {

  }

  ngOnInit(): void {
    this.dataService.currentMessage.subscribe(message => this.message = message);
    this.dataService.currentUser.subscribe(user => this.loggedInUser = user);
  }

  newMessage(msg:string):void {
    this.dataService.changeMessage(msg);
  }

  newUser(uname:string):void {
    this.dataService.changeUser(uname);
  }

  doAuth() {

    this.authRequest.auth.username = this.user.username;
    this.authRequest.auth.password = this.user.password;
    this.newUser(this.user.username);

    this.loginService.authenticateUser(this.authRequest).subscribe(
      success => {
        this.authResult = success;
        if ( this.authResult.status ) {
          if ( this.authResult.status == 'SUCCESS' ) {
            this.switchToHomeView();
            //console.log(this.user.username);
            this.user.username = '';
            this.user.password = '';
            this.hideMessages();
            this.newMessage("HUNCHO JACK JACK HUNCHO");
          }
          else if ( this.authResult.status == 'ERROR' ) {
            this.user.username = '';
            this.user.password = '';
            this.showError = true;
          }
        }
      },
      error => {
        console.log(error);
        this.showError = true;
      }
    );
  }


  switchToRegisterView() {
    this.router.navigate(['/auth/register']);
  }

  switchToHomeView() {
    this.router.navigate(['/content/dashboard']);
  }

}

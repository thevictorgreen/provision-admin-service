import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {

  showSuccess:boolean = false;
  showError:boolean = false;

  hideMessages() {
    this.showSuccess = false;
    this.showError = false;
  }

  user = {
    username: '',
    password: '',
    officeid: ''
  }

  authRequest = {
    username: '',
    password: '',
    relaystate: '/myapp/some/deep/link/i/want/to/return/to',
    options: {
      multiOptionalFactorEnroll: false,
      warnBeforePasswordExpired: false
    }
  }

  authResult:any;

  constructor(private router: Router, public loginService:LoginService) {

  }

  doAuth() {
    this.authRequest.username = this.user.username;
    this.authRequest.password = this.user.password;
    this.loginService.authenticateUser(this.authRequest).subscribe(
      success => {
        this.authResult = success;
        if ( this.authResult.status ) {
          if ( this.authResult.status == 'SUCCESS' ) {
            this.switchToHomeView();
            //console.log(this.user.username);
            this.user.username = '';
            this.user.password = '';
            this.user.officeid = '';
            this.hideMessages();
          }
        }
      },
      error => {
        console.log(error);
        //alert('Invalid Password');
        this.showError = true;
      }
    );
  }


  switchToRegisterView() {
    this.router.navigate(['/auth/register']);
  }

  switchToHomeView() {
    //console.log( this.authResult );
    this.router.navigate(['/content/dashboard']);
  }

}

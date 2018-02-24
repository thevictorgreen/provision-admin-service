import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { RegisterService } from '../../services/register/register.service';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  regRequest = {
    profile: {
      firstName: 'Vince',
      lastName: 'Verde',
      email: 'thevictorgreen@gmail.com',
      login: 'thevictorgreen@gmail.com',
      mobilePhone: '202-233-3984'
    },
    credentials: {
      password: {
        value: "!!!G0th@m!!!"
      }
    }
  }

  regResult:any;

  constructor(private router: Router, public registerService: RegisterService) { }

  doReg() {
    this.registerService.registerUser(this.regRequest).subscribe(
      success => {
        console.log(success);
        this.switchToLoginView();
      },
      error => {
        console.log(error);
      }
    );
  }

  switchToLoginView() {
    this.router.navigate(['/auth/login']);
  }

}

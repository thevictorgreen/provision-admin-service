import { Injectable } from '@angular/core';
import {Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {

  constructor(public http:Http) {

  }

  authenticateUser(authRequest) {
    return this.http.post('https://dev-272676.oktapreview.com/api/v1/authn',authRequest).map(res => res.json());
  }

}

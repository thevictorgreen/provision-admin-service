import { Injectable } from '@angular/core';
import {Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService {

  constructor(public http:Http) {

  }

  registerUser(regRequest) {
    var headers = new Headers();
    headers.append('Authorization','SSWS 00mOA5Ng7AuVfZGNlLCO4KrY5CGwGm7VN9lNHGmcbs');
    return this.http.post('https://dev-272676.oktapreview.com/api/v1/users?activate=true',regRequest,{headers:headers}).map(res => res.json());
  }

}

import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  
  url:string = "http://localhost:3000/triplea";

  constructor(public http:Http) {}

  authenticateUser(authRequest) {
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http.post(this.url,authRequest,opts).map(res => res.json());
  }

}

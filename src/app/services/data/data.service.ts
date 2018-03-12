import { Injectable } from  '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<string>("Default message");
  currentMessage = this.messageSource.asObservable();

  private userSource = new BehaviorSubject<string>("empty");
  currentUser = this.userSource.asObservable();

  constructor() {}

  changeMessage(message:string): void {
    this.messageSource.next(message);
  }

  changeUser(uname:string): void {
    this.userSource.next(uname);
  }
}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html'
})
export class AppHeaderComponent implements OnInit {

  user:any;

  constructor( private dataService: DataService ) {}

  ngOnInit(): void {
    this.dataService.currentUser.subscribe(user => this.user = user);
  }

}

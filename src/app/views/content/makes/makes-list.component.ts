import { Component, OnInit } from '@angular/core';
import { MakesService } from '../../../services/makes/makes.service';
import { NgFor } from '@angular/common';

@Component({
  templateUrl: 'makes-list.component.html'
})
export class MakesListComponent implements OnInit {

  authResult:any;

  makes: any[];

  constructor( private makesService: MakesService ) { }

  ngOnInit(): void {
    this.getAllMakes();
  }

  getAllMakes(): void {
    this.makesService.getAllMakes().subscribe(success => {
      //console.log(success);
      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {
          //console.log(this.authResult.data.length);
          this.makes = this.authResult.data;
          //console.log('Fetched makes ' + this.makes);
        }
        else if ( this.authResult.status == 'ERROR' ) {
          console.log( 'APPLICATION ERROR' );
        }
      }
    },
    error => {
      //console.log(error);
      //this.showError = true;
    }
    );
  }

}

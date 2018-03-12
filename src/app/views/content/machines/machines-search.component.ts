import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MachineService } from '../../../services/machine/machine.service';
import { NgFor } from '@angular/common';

@Component({
  templateUrl: 'machines-search.component.html'
})
export class MachinesSearchComponent implements OnInit {

  authResult:any;
  machines: any[];

  search_param:any;

  constructor(public machineService:MachineService, private route: ActivatedRoute,private location: Location) {

  }

  ngOnInit(): void {
    this.searchMachinesOnload();
  }

  searchMachines(): void {
    //const searchTerm = this.route.snapshot.paramMap.get('id');
    //alert( searchTerm );

    this.machineService.getMachine( this.search_param ).subscribe(success => {

      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {

          if (this.authResult.data.length >= 1) {
            this.machines = this.authResult.data;
            console.log( this.machines );
          }
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

    this.search_param = '';
  }

  searchMachinesOnload(): void {
    const searchTerm = this.route.snapshot.paramMap.get('id');
    //alert( searchTerm );

    this.machineService.getMachine( searchTerm ).subscribe(success => {

      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {

          if (this.authResult.data.length >= 1) {
            this.machines = this.authResult.data;
            console.log( this.machines );
          }
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

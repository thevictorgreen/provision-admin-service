import { Component, OnInit } from '@angular/core';

import { MachineService } from '../../../services/machine/machine.service';
import { NgFor } from '@angular/common';

@Component({
  templateUrl: './machines-list.component.html'
})
export class MachinesListComponent implements OnInit {

  authResult:any;
  machines: any[];

  constructor( public machineService:MachineService ) { }

  getAllMachines(): void {
    this.machineService.getAllMachines().subscribe(success => {
      //console.log(success);
      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {
          //console.log(this.authResult.data.length);
          this.machines = this.authResult.data;
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

  ngOnInit(): void {
    this.getAllMachines();
  }

}

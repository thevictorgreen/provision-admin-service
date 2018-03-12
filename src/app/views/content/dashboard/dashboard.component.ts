import { Component, OnInit }  from '@angular/core';
import { Router } from '@angular/router';

import { MachineService } from '../../../services/machine/machine.service';
import { NgFor } from '@angular/common';
import { Machine } from '../../../models/machines/machine';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  authResult:any;
  machines: Machine[];

  phase = {
    inbox: 0,
    setup: 0,
    inuse: 0
  }

  constructor( private router: Router, public machineService:MachineService ) { }

  getAllMachines(): void {
    this.machineService.getAllMachines().subscribe(success => {
      //console.log(success);
      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {
          //console.log(this.authResult.data.length);
          this.machines = this.authResult.data;
          this.getPhases();
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

  getPhases(): void {

    for (var i = 0;i < this.machines.length;i++) {
      if ( this.machines[i].provisioning_status === "IN-BOX" ) {
        this.phase.inbox += 1;
      }
    }

    for (var i = 0;i < this.machines.length;i++) {
      if ( this.machines[i].provisioning_status === "SETUP" ) {
        this.phase.setup += 1;
      }
    }

    for (var i = 0;i < this.machines.length;i++) {
      if ( this.machines[i].provisioning_status === "IN-USE" ) {
        this.phase.inuse += 1;
      }
    }


  }

  ngOnInit(): void {
    this.getAllMachines();
  }


}

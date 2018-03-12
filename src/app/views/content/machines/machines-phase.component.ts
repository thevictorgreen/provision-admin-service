import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MachineService } from '../../../services/machine/machine.service';
import { NgFor } from '@angular/common';

@Component({
  templateUrl: './machines-phase.component.html'
})
export class MachinesPhaseComponent implements OnInit {

  authResult:any;
  machines: any[];
  phase: any;

  constructor( public machineService:MachineService, private route: ActivatedRoute,private location: Location ) { }

  getAllMachines(): void {
    const selectedPhase = this.route.snapshot.paramMap.get('id');

    if (selectedPhase === "inbox") {
      this.phase = "IN-BOX";
    }
    else if (selectedPhase === "setup") {
      this.phase = "SETUP";
    }
    else if (selectedPhase === "inuse") {
      this.phase = "IN-USE";
    }

    this.machineService.getAllMachines().subscribe(success => {
      //console.log(success);
      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {
          //console.log(this.authResult.data.length);
          this.machines = this.authResult.data;
          //alert( this.phase );
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

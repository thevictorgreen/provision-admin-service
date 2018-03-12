import { Component,OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MachineService } from '../../../services/machine/machine.service';

@Component({
  templateUrl: 'machines-log.component.html'
})

export class MachinesLogComponent implements OnInit {

  authResult:any;


  machine = {
    _id: '',

    serial_number:'',

    hostname:'',

    mac_addr:'',

    make_model: {
      make:'',
      model:''
    },

    property_custodian:'',

    cd_number:'',

    property_owner:'',

    branch:'',

    division:'',

    point_of_contact:'',

    project:'',

    machine_use:'',

    initial_software: [
      "spacewalk",
      "puppet-agent",
      "sensu",
      "ipa-client"
    ],

    property_owner_tasks: {
      point_of_contact:''
    },

    point_of_contact_tasks: {
      project:'',
      use: '',
      initial_software_selected: 'NO'
    },

    it_tasks: {
      unboxed: 'NO',
      added_to_inventory: 'NO',
      has_available_pdu: 'NO',
      has_initial_config: 'NO',
      has_available_rack: 'NO',
      moved_to_datacenter: 'NO',
      initial_software_installed:'NO'
    },

    network_tasks: {
      configured_port:'NO'
    },

    maintenance_tasks: {
      has_available_power:'NO'
    },

    provisioning_status:'IN-BOX',

    tags:[],

    provisioning_log:[]

  }


  constructor( private route: ActivatedRoute,
               private machineService: MachineService,
               private location: Location
              ) {
  }


  ngOnInit(): void {
    this.getMachine();
  }


  getMachine(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.machineService.getMachine( id ).subscribe(success => {

      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {

          if (this.authResult.data.length >= 1) {
            this.machine = this.authResult.data[0];
            console.log( this.machine );
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


  cancel(): void {
    this.location.back();
  }


}

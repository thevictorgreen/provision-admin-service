import { Component, OnInit  } from '@angular/core';
import { Location } from '@angular/common';

import { MachineService } from '../../../services/machine/machine.service';
import { MakesService } from '../../../services/makes/makes.service';

@Component({
  templateUrl: 'machines-add.component.html'
})
export class MachinesAddComponent implements OnInit {

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

  authRequest = {
    auth: {
      "username":'',
      "password":''
    },
    machine: {

    }
  }

  makes: any[];
  models: any[];

  constructor( public machineService:MachineService, private location: Location, private makesService: MakesService ) { }

  ngOnInit(): void {
    this.getAllMakes();
    this.getModels();
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

  getModels(): void {
    const make = this.machine.make_model.make;
    //alert('Fetching models for ' + make);
    this.makesService.getMake( make ).subscribe(success => {

      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {

          if (this.authResult.data.length >= 1) {
            this.models = this.authResult.data[0].models;
            //console.log( this.models );
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

  addMachine(): void {
    //alert("Make:" +this.machine.make_model.make+" Model:" +this.machine.make_model.model);
    this.machine._id = this.machine.serial_number;
    this.machine.tags.push( this.machine.serial_number );
    this.authRequest.machine = this.machine;
    //console.log( this.authRequest );
    this.machineService.addMachine( this.authRequest ).subscribe(success => {
      //console.log(success);
      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'ok' ) {
          //console.log(this.authResult.data.length);
          this.location.back();
        }
        else if ( this.authResult.status == 'error' ) {
          console.log( 'APPLICATION ERROR' );
        }
      }
    },
    error => {
      console.log(error);
      //this.showError = true;
    }
  );
  }

  cancel(): void {
    this.location.back();
  }

}

import { Component, OnInit  } from '@angular/core';
import { Location } from '@angular/common';

import { MachineService } from '../../../services/machine/machine.service';
import { MakesService } from '../../../services/makes/makes.service';
import { DellService } from '../../../services/dell/dell.service';
import { DataService } from '../../../services/data/data.service';

@Component({
  templateUrl: 'machines-add-dell.component.html'
})
export class MachinesAddDellComponent implements OnInit {

  authResult:any;

  user:any;

  machine = {
    _id: '',

    serial_number:'',

    hostname:'',

    mac_addr:'',

    make_model: {
      make:'Dell',
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

    initial_star_software:[
      "spacewalk",
      "puppet-agent",
      "sensu",
      "ipa-client"
    ],

    initial_software: [],

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

  constructor( public machineService:MachineService, private location: Location, private makesService: MakesService, private dellService:DellService, private dataService: DataService ) { }

  ngOnInit(): void {
    this.getAllMakes();
    this.getModels();
    this.dataService.currentUser.subscribe(user => this.user = user);
  }

  searchModel(): void {
    const value = this.machine.serial_number;
    this.dellService.getMake( value ).subscribe(success => {

      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {

          if (this.authResult.data.length >= 1) {
            this.machine.make_model.model = this.authResult.data;
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

    var entry1 = {
      user: '',
      field: '',
      value: '',
      time: ''
    };

    var entry2 = {
      user: '',
      field: '',
      value: '',
      time: ''
    };

    var entry3 = {
      user: '',
      field: '',
      value: '',
      time: ''
    };

    entry1.user = this.user;
    entry1.field = "machine.serial_number";
    entry1.value = this.machine.serial_number;
    var evtime  = new Date();
    var evts    = evtime.toString();
    entry1.time  = evts;
    this.machine.provisioning_log.push( entry1 );

    entry2.user = this.user;
    entry2.field = "machine.make_model.make";
    entry2.value = this.machine.make_model.make;
    evtime      = new Date();
    evts        = evtime.toString();
    entry2.time  = evts;
    this.machine.provisioning_log.push( entry2 );

    entry3.user = this.user;
    entry3.field = "machine.make_model.model";
    entry3.value = this.machine.make_model.model;
    evtime      = new Date();
    evts        = evtime.toString();
    entry3.time  = evts;
    this.machine.provisioning_log.push( entry3 );

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

import { Component,OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MachineService } from '../../../services/machine/machine.service';
import { MakesService } from '../../../services/makes/makes.service';
import { DataService } from '../../../services/data/data.service';

@Component({
  templateUrl: 'machines-detail.component.html'
})

export class MachinesDetailComponent implements OnInit {

  authResult:any;

  message:string;

  user:any;

  authRequest = {
    auth: {
      "username":'',
      "password":''
    },
    machine: {

    }
  }

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

  makes: any[];
  models: any[];
  provisioning_log: any[];

  new_star_software:string = '';
  new_user_software:string = '';

  constructor( private route: ActivatedRoute,
               private machineService: MachineService,
               private location: Location,
               private makesService: MakesService,
               private dataService: DataService
              ) {
  }


  ngOnInit(): void {
    this.getMachine();
    this.getAllMakes();
    this.dataService.currentMessage.subscribe(message => this.message = message);
    this.dataService.currentUser.subscribe(user => this.user = user);
    console.log(this.user);
  }

  logChanges(event): void {

    var entry = {
      user: '',
      field: '',
      value: '',
      time: ''
    };

    entry.user = this.user;
    entry.field = event.target.id;
    entry.value = event.target.value;
    entry.time  = new Date().toString();
    this.machine.provisioning_log.push( entry );

    //console.log( this.machine );
  }


  getMachine(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.machineService.getMachine( id ).subscribe(success => {

      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {

          if (this.authResult.data.length >= 1) {
            this.machine = this.authResult.data[0];
            //console.log( this.machine );
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

  setPhase(): void {
    if (
      this.machine.mac_addr != '' &&
      this.machine.it_tasks.unboxed === 'YES' &&
      this.machine.it_tasks.added_to_inventory === 'YES' &&
      this.machine.it_tasks.has_initial_config === 'YES'
    ) {
      this.machine.provisioning_status = "SETUP";
    }

    if (
      this.machine.property_custodian != '' &&
      this.machine.cd_number != '' &&
      this.machine.property_owner != '' &&
      this.machine.branch != '' &&
      this.machine.division != '' &&

      this.machine.property_owner_tasks.point_of_contact != '' &&

      this.machine.point_of_contact_tasks.project != '' &&
      this.machine.point_of_contact_tasks.use != '' &&
      this.machine.point_of_contact_tasks.initial_software_selected === 'YES' &&

      this.machine.it_tasks.has_available_rack === 'YES' &&
      this.machine.it_tasks.has_available_pdu === 'YES' &&

      this.machine.maintenance_tasks.has_available_power === 'YES' &&

      this.machine.network_tasks.configured_port === 'YES' &&

      this.machine.hostname != '' &&
      this.machine.it_tasks.moved_to_datacenter === 'YES' &&
      this.machine.it_tasks.initial_software_installed === 'YES'

    ) {
      this.machine.provisioning_status = "IN-USE";
    }

  }

  saveStarSoftwareChanges(): void {

    this.addStarSoftware();

    var iterations = this.machine.initial_star_software.length;
    for (var i = 0;i < iterations;i++) {
      this.removeStarSoftware();
    }

    this.save();
  }

  addStarSoftware(): void {
    // ADD NEW MODELS
    var n_software = this.new_star_software.split(",");
    for (var i = 0;i < n_software.length;i++) {
      this.machine.initial_star_software.push( n_software[i] );
    }
  }

  removeStarSoftware(): void{
    // REMOVE ALL EMPTY MODELS
    for (var i = 0;i < this.machine.initial_star_software.length;i++) {
      if (this.machine.initial_star_software[i] == '') {
        this.machine.initial_star_software.splice(i,1);
        break;
      }
    }
  }

  saveUserSoftwareChanges(): void {

    this.addUserSoftware();

    var iterations = this.machine.initial_software.length;
    for (var i = 0;i < iterations;i++) {
      this.removeUserSoftware();
    }
    
    this.save();
  }

  addUserSoftware(): void {
    // ADD NEW MODELS
    var n_software = this.new_user_software.split(",");
    for (var i = 0;i < n_software.length;i++) {
      this.machine.initial_software.push( n_software[i] );
    }
  }

  removeUserSoftware(): void{
    // REMOVE ALL EMPTY MODELS
    for (var i = 0;i < this.machine.initial_software.length;i++) {
      if (this.machine.initial_software[i] == '') {
        this.machine.initial_software.splice(i,1);
        break;
      }
    }
  }

  save(): void {
    //console.log( this.machine );
    this.setPhase();

    this.authRequest.machine = this.machine;
    //console.log( this.authRequest );
    this.machineService.updateMachine( this.authRequest ).subscribe(success => {
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

  remove(): void {
    const id = this.machine._id;
    //console.log( this.authRequest );
    this.machineService.deleteMachine( id ).subscribe(success => {
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

}

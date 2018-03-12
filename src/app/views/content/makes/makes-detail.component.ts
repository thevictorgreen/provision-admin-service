import { Component,OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MakesService } from '../../../services/makes/makes.service';

@Component({
  templateUrl: 'makes-detail.component.html'
})
export class MakesDetailComponent implements OnInit {

  authRequest = {
    auth: {
      "username":'',
      "password":''
    },
    model: {

    }
  }

  authResult:any;

  make = {
    _id: '',
    make: '',
    models: []
  }

  new_models:string = '';

  constructor( private route: ActivatedRoute,
               private location: Location,
               private makesService: MakesService
             ) {

  }

  getMake(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.makesService.getMake( id ).subscribe(success => {

      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {

          if (this.authResult.data.length >= 1) {
            this.make = this.authResult.data[0];
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

  save(): void {

    this.addModels();
    
    //console.log("1ST:" + this.make.models);
    var iterations = this.make.models.length;
    for (var i = 0;i < iterations;i++) {
      this.removeModels();
    }

    //console.log("2ND:" + this.make.models);
    //this.addModels();

    //console.log("3RD:" + this.make.models);

    this.new_models = '';

    this.authRequest.model = this.make;
    //console.log( this.authRequest );
    this.makesService.updateMake( this.authRequest ).subscribe(success => {
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

  addModels(): void {
    // ADD NEW MODELS
    var n_models = this.new_models.split(",");
    for (var i = 0;i < n_models.length;i++) {
      this.make.models.push( n_models[i] );
    }
  }

  removeModels(): void{
    // REMOVE ALL EMPTY MODELS
    for (var i = 0;i < this.make.models.length;i++) {
      if (this.make.models[i] == '') {
        this.make.models.splice(i,1);
        break;
      }
    }
  }

  remove(): void {

  }

  cancel(): void {
    this.location.back();
  }


  ngOnInit(): void {
    this.getMake();
  }

}

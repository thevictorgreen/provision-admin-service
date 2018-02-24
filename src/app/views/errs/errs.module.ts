import { NgModule } from '@angular/core';

import { P404Component } from './404.component';
import { P500Component } from './500.component';

import { ErrsRoutingModule } from './errs-routing.module';

@NgModule({
  imports: [ ErrsRoutingModule ],
  declarations: [
    P404Component,
    P500Component
  ]
})
export class ErrsModule { }

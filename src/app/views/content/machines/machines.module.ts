import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MachinesListComponent } from './machines-list.component';
import { MachinesDetailComponent } from './machines-detail.component';
import { MachinesSearchComponent } from './machines-search.component';
import { MachinesAddComponent } from './machines-add.component';
import { MachinesAddDellComponent } from './machines-add-dell.component';
import { MachinesPhaseComponent } from './machines-phase.component';
import { MachinesLogComponent } from './machines-log.component';

import { MachinesRoutingModule } from './machines-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [ MachinesRoutingModule,CommonModule,FormsModule ],
  declarations: [
    MachinesListComponent,
    MachinesDetailComponent,
    MachinesSearchComponent,
    MachinesAddComponent,
    MachinesAddDellComponent,
    MachinesPhaseComponent,
    MachinesLogComponent
  ]
})
export class MachinesModule { }

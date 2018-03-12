import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MakesListComponent } from './makes-list.component';
import { MakesDetailComponent } from './makes-detail.component';
import { MakesSearchComponent } from './makes-search.component';
import { MakesAddComponent } from './makes-add.component';

import { MakesRoutingModule } from './makes-routing.module';


@NgModule({
  imports: [ MakesRoutingModule,FormsModule,CommonModule ],
  declarations: [
    MakesListComponent,
    MakesDetailComponent,
    MakesSearchComponent,
    MakesAddComponent
  ]
})
export class MakesModule { }

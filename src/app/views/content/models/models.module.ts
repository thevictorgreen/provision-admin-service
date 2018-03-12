import { NgModule } from '@angular/core';

import { ModelsListComponent } from './models-list.component';
import { ModelsDetailComponent } from './models-detail.component';
import { ModelsSearchComponent } from './models-search.component';
import { ModelsAddComponent } from './models-add.component';

import { ModelsRoutingModule } from './models-routing.module';


@NgModule({
  imports: [ ModelsRoutingModule ],
  declarations: [
    ModelsListComponent,
    ModelsDetailComponent,
    ModelsSearchComponent,
    ModelsAddComponent
  ]
})
export class ModelsModule { }

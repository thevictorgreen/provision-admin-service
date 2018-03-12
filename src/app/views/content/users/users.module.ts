import { NgModule } from '@angular/core';

import { UsersListComponent } from './users-list.component';
import { UsersDetailComponent } from './users-detail.component';
import { UsersSearchComponent } from './users-search.component';
import { UsersAddComponent } from './users-add.component';

import { UsersRoutingModule } from './users-routing.module';


@NgModule({
  imports: [ UsersRoutingModule ],
  declarations: [
    UsersListComponent,
    UsersDetailComponent,
    UsersSearchComponent,
    UsersAddComponent
  ]
})
export class UsersModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './users-list.component';
import { UsersDetailComponent } from './users-detail.component';
import { UsersSearchComponent } from './users-search.component';
import { UsersAddComponent } from './users-add.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Users'
    },
    children: [
      {
        path: 'users-list',
        component: UsersListComponent,
        data: {
          title: 'Users List'
        }
      },
      {
        path: 'users-detail',
        component: UsersDetailComponent,
        data: {
          title: 'Users Detail'
        }
      },
      {
        path: 'users-search',
        component: UsersSearchComponent,
        data: {
          title: 'Users Search'
        }
      },
      {
        path: 'users-add',
        component: UsersAddComponent,
        data: {
          title: 'Users Add'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}

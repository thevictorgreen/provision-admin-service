import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakesListComponent } from './makes-list.component';
import { MakesDetailComponent } from './makes-detail.component';
import { MakesSearchComponent } from './makes-search.component';
import { MakesAddComponent } from './makes-add.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Makes'
    },
    children: [
      {
        path: 'makes-list',
        component: MakesListComponent,
        data: {
          title: 'Makes List'
        }
      },
      {
        path: 'makes-detail/:id',
        component: MakesDetailComponent,
        data: {
          title: 'Makes Detail'
        }
      },
      {
        path: 'makes-search',
        component: MakesSearchComponent,
        data: {
          title: 'Makes Search'
        }
      },
      {
        path: 'makes-add',
        component: MakesAddComponent,
        data: {
          title: 'Makes Add'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakesRoutingModule {}

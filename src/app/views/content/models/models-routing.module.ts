import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelsListComponent } from './models-list.component';
import { ModelsDetailComponent } from './models-detail.component';
import { ModelsSearchComponent } from './models-search.component';
import { ModelsAddComponent } from './models-add.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Models'
    },
    children: [
      {
        path: 'models-list',
        component: ModelsListComponent,
        data: {
          title: 'Models List'
        }
      },
      {
        path: 'models-detail',
        component: ModelsDetailComponent,
        data: {
          title: 'Models Detail'
        }
      },
      {
        path: 'models-search',
        component: ModelsSearchComponent,
        data: {
          title: 'Models Search'
        }
      },
      {
        path: 'models-add',
        component: ModelsAddComponent,
        data: {
          title: 'Models Add'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelsRoutingModule {}

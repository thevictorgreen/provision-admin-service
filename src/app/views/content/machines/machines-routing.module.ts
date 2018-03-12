import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MachinesListComponent } from './machines-list.component';
import { MachinesDetailComponent } from './machines-detail.component';
import { MachinesSearchComponent } from './machines-search.component';
import { MachinesAddComponent } from './machines-add.component';
import { MachinesAddDellComponent } from './machines-add-dell.component';
import { MachinesPhaseComponent } from './machines-phase.component';
import { MachinesLogComponent } from './machines-log.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Machines'
    },
    children: [
      {
        path: 'machines-list',
        component: MachinesListComponent,
        data: {
          title: 'Machines List'
        }
      },
      {
        path: 'machines-detail/:id',
        component: MachinesDetailComponent,
        data: {
          title: 'Machine Detail'
        }
      },
      {
        path: 'machines-phase/:id',
        component: MachinesPhaseComponent,
        data: {
          title: 'Machines By Phase'
        }
      },
      {
        path: 'machines-search/:id',
        component: MachinesSearchComponent,
        data: {
          title: 'Machines Search'
        }
      },
      {
        path: 'machines-log/:id',
        component: MachinesLogComponent,
        data: {
          title: 'Machine Change Logs'
        }
      },
      {
        path: 'machines-add',
        component: MachinesAddComponent,
        data: {
          title: 'Machines Add'
        }
      },
      {
        path: 'machines-add-dell',
        component: MachinesAddDellComponent,
        data: {
          title: 'Add Dell'
        }
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MachinesRoutingModule {}

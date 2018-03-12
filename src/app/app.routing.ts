import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import {
  FullLayoutComponent,
  SimpleLayoutComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    data: {
      title: 'Authentication'
    },
    children: [
      {
        path: '',
        loadChildren: './views/auth/auth.module#AuthModule',
      }
    ]
  },
  {
    path: 'errs',
    component: SimpleLayoutComponent,
    data: {
      title: 'Errors'
    },
    children: [
      {
        path: '',
        loadChildren: './views/errs/errs.module#ErrsModule',
      }
    ]
  },
  {
    path: 'content',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/content/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'machines',
        loadChildren: './views/content/machines/machines.module#MachinesModule'
      },
      {
        path: 'makes',
        loadChildren: './views/content/makes/makes.module#MakesModule'
      },
      {
        path: 'models',
        loadChildren: './views/content/models/models.module#ModelsModule'
      },
      {
        path: 'users',
        loadChildren: './views/content/users/users.module#UsersModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

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
        path: 'components',
        loadChildren: './views/content/components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './views/content/icons/icons.module#IconsModule'
      },
      {
        path: 'forms',
        loadChildren: './views/content/forms/forms.module#FormsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';

import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ AuthRoutingModule,FormsModule,CommonModule ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ]
})
export class AuthModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { LogoComponent } from '../../components/logo/logo.component';
import { LogoModule } from '../../components/logo/logo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    LogoModule,
    ReactiveFormsModule 
  ],
  declarations: [LoginPage],
  exports: []
})
export class LoginPageModule {}

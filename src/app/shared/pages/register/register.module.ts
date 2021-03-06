import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { LogoModule } from '../../components/logo/logo.module';
import { LogoComponent } from '../../components/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    LogoModule
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}

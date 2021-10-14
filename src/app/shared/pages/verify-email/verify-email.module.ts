import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyEmailPageRoutingModule } from './verify-email-routing.module';

import { VerifyEmailPage } from './verify-email.page';
import { LogoModule } from '../../components/logo/logo.module';
import { LogoComponent } from '../../components/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerifyEmailPageRoutingModule,
    LogoModule
  ],
  declarations: [VerifyEmailPage]
})
export class VerifyEmailPageModule {}

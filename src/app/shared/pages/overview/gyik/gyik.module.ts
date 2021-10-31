import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GyikPageRoutingModule } from './gyik-routing.module';

import { GyikPage } from './gyik.page';
import { OverviewHeaderModule } from 'src/app/shared/components/overview-header/overview-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GyikPageRoutingModule,
    OverviewHeaderModule
  ],
  declarations: [GyikPage]
})
export class GyikPageModule {}

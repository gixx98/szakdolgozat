import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GyikPageRoutingModule } from './gyik-routing.module';

import { GyikPage } from './gyik.page';
import { OverviewHeaderModule } from 'src/app/shared/components/overview-header/overview-header.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GyikPageRoutingModule,
    OverviewHeaderModule,
    Ng2SearchPipeModule
  ],
  declarations: [GyikPage]
})
export class GyikPageModule {}

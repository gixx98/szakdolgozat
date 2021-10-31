import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatorPageRoutingModule } from './calculator-routing.module';

import { CalculatorPage } from './calculator.page';
import { OverviewHeaderModule } from 'src/app/shared/components/overview-header/overview-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculatorPageRoutingModule,
    OverviewHeaderModule
  ],
  declarations: [CalculatorPage]
})
export class CalculatorPageModule {}

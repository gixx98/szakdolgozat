import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectsPageRoutingModule } from './subjects-routing.module';

import { SubjectsPage } from './subjects.page';
import { OverviewHeaderModule } from 'src/app/shared/components/overview-header/overview-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectsPageRoutingModule,
    OverviewHeaderModule
  ],
  declarations: [SubjectsPage]
})
export class SubjectsPageModule {}

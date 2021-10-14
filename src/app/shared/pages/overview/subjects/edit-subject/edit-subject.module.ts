import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSubjectPageRoutingModule } from './edit-subject-routing.module';

import { EditSubjectPage } from './edit-subject.page';
import { OverviewHeaderModule } from 'src/app/shared/components/overview-header/overview-header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSubjectPageRoutingModule,
    OverviewHeaderModule,
    ReactiveFormsModule
  ],
  declarations: [EditSubjectPage]
})
export class EditSubjectPageModule {}

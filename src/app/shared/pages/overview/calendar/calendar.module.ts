import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarPageRoutingModule } from './calendar-routing.module';

import { CalendarPage } from './calendar.page';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import intercationPlugin from '@fullcalendar/interaction';
import timegridPlugin from '@fullcalendar/timegrid';
import { OverviewHeaderModule } from 'src/app/shared/components/overview-header/overview-header.module';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  intercationPlugin,
  timegridPlugin
])

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule,
    FullCalendarModule,
    OverviewHeaderModule
  ],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 
import { LoadingController } from '@ionic/angular';
import { CalendarService } from 'src/app/shared/services/calendar.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit, OnDestroy{

  constructor(
    public service: CalendarService,
    public loadingController: LoadingController

  ) { }

  events: Array<any> = [];

  ngOnInit() {
    this.presentLoading();
    this.service.getEvents().toPromise()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        this.events.push({
          title:doc.data().title, 
          daysOfWeek: [doc.data().daysOfWeek], 
          startRecur: doc.data().startDay, 
          startTime: doc.data().startTime,
          endTime: doc.data().endTime,
          endRecur:'2021-11-10',
        })
      })
    }).then(()=>{
      this.calendarOptions.events = this.events;
      this.loadingController.dismiss();
    })
  }

  ngOnDestroy(){
    this.loadingController.dismiss();
  }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Kérlek várj...',
    });
    await loading.present();
  }

  addEvent(){
    console.log(this.events)
  }

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    height: 750,
    initialView: 'timeGridWeek',
    weekends: false,
    buttonText: {
      today:    'Ma',
      month:    'Hónap',
      week:     'Hét',
      day:      'Nap',
      list:     'Lista'
    },
    slotMinTime: "06:00:00",
    slotMaxTime: "22:00:00",
    locale: "hu",
  };
}



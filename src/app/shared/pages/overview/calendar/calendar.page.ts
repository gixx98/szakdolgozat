import { Component, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; 
import { AlertController, LoadingController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CalendarService } from 'src/app/shared/services/calendar.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit, OnDestroy {
  @ViewChild('fullCalendar') calendar: FullCalendarComponent;
  subscription: Subscription;
  
  constructor(
    public service: CalendarService,
    public loadingController: LoadingController,
    public router:Router,
    public alertController: AlertController

  ) { }

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'addEventButton',
      right: 'timeGridWeek,timeGridDay'
    },
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
    nowIndicator: true,
    eventClick: (info) => {
      this.presentSubjectEvent(info.event);
    },
    height: 700,
    droppable: true,
    // editable: true,
    customButtons:{
      addEventButton: {
        text: 'Esemény hozzáadása',
        click: () => {
          this.router.navigate(['overview/calendar/add-event']);
        }
      }
    }
  };
  
  events: Array<any> = [];

  ngOnInit() {
    this.presentLoading();
    this.subscription = this.service.getEventsValue().subscribe(value => {
      this.events = [];
      value.forEach((doc) =>{
        if(doc.extendedProps.type === 'CustomEvent'){
          this.events.push({
            id: doc.id,
            title:doc.title,
            start: doc.start, 
            end: doc.end,
            color: doc.color,
            allDay: doc.allDay
          })
        }
        // else if(doc.extendedProps){
        //   this.events.push({
        //     id: doc.id,
        //     title:doc.title, 
        //     daysOfWeek: [doc.daysOfWeek], 
        //     startRecur: doc.startDay, 
        //     startTime: doc.startTime,
        //     endTime: doc.endTime,
        //     endRecur:'2021-12-10',
        //     color: doc.color,
        //     teacher: doc.extendedProps.teacher,
        //     room: doc.extendedProps.room,
        //     credit: doc.extendedProps.credit
        //   });
        // }
        else{
          this.events.push({
            id: doc.id,
            title:doc.title, 
            daysOfWeek: [doc.daysOfWeek], 
            startRecur: doc.startDay, 
            startTime: doc.startTime,
            endTime: doc.endTime,
            endRecur:'2021-12-10',
            color: doc.color
          });
        }
      console.log(doc);
      });
      this.calendarOptions.events = this.events;
    });
  }

  render(){
    let calendarApi = this.calendar.getApi();
    calendarApi.render();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    // clearInterval(this.interval);
  }
  
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Kérlek várj...',
      duration: 750
    });
    this.render();
    await loading.present();
  }

  async presentAlertConfirm(id:string, title: string) {

    const alert = await this.alertController.create({
      cssClass: 'alertController',
      header: title ,
      message: `<strong>Törölni</strong> szeretnéd a(z) <strong>${title}</strong> eseményt?`,
      buttons: [
        {
          text: 'Nem!',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Törlés',
          cssClass: 'redColor',
          handler: () => {
            this.service.deleteEventById(id);
          }
        }
      ]
    });

    await alert.present()
  }

  async presentSubjectEvent(event:any) {
    var message;
    if(Object.keys(event.extendedProps).length != 0){
      message = `Kezdés: ${event.startStr.substr(11,5)} <br/> Vége: ${event.endStr.substr(11,5)} <br/> Tanterem: ${event.extendedProps.room} <br/> Tanár: ${event.extendedProps.teacher}`;
    }else{
      message = `Kezdés: ${event.startStr.substr(11,5)} <br/> Vége: ${event.endStr.substr(11,5)}`;
    }
    const alert = await this.alertController.create({
      cssClass: 'alertController',
      header: event.title,
      message:  message,
      buttons: [
        {
          text: 'Törlés',
          cssClass: 'redColor',
          handler: () => {
            this.presentAlertConfirm(event.id, event.title)
            // this.service.deleteEventById(event.id);
          }
        },
        {
          text: 'Rendben',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }
      ]
    });

    await alert.present()
  }
}
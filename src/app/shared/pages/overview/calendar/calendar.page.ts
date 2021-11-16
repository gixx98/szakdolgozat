import { ThrowStmt } from '@angular/compiler';
import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular'; 
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { CalendarService } from 'src/app/shared/services/calendar.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit{
  @ViewChild('fullCalendar', { static: true }) calendar: FullCalendarComponent;

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
      // this.service.deleteEventById(info.event.id)
      this.presentAlertConfirm(info.event.id,info.event.title);
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
    // this.presentLoading();
    // this.service.getEvents().toPromise()
    // .then((snapshot) => {
    //   snapshot.docs.forEach((doc) => {
    //     this.events.push({
    //       title:doc.data().title, 
    //       daysOfWeek: [doc.data().daysOfWeek], 
    //       startRecur: doc.data().startRecur, 
    //       startTime: doc.data().startTime,
    //       endTime: doc.data().endTime,
    //       endRecur:'2021-12-10',
    //       color: doc.data().color
    //     })
    //   })
    // }).then(()=>{
    //   this.calendarOptions.events = this.events;
    // });


    this.service.getEventsValue().subscribe(value => {
      this.events = [];
      value.forEach((doc) =>{
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
      });
      this.calendarOptions.events = this.events;
    });
  }

  
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Kérlek várj...',
      duration: 750
    });
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
          handler: () => {
            this.service.deleteEventById(id);
          }
        }
      ]
    });

    await alert.present()
  }
}
import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { Router} from '@angular/router'
import { AlertController } from '@ionic/angular';
import { CalendarService } from 'src/app/shared/services/calendar.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit, OnDestroy {

  constructor(
    private subjectService:SubjectService,
    public alertController: AlertController,
    private calendarService: CalendarService,
    public router:Router
    ) { 

  }

  ngOnInit() {
    this.getSubjects();
  }

  ngOnDestroy(){
    this.getSubjects().unsubscribe();
  }

  subjects:any;

  getSubjects = () => this.subjectService.getSubjects().subscribe( res => (this.subjects = res));

  getSubjectsLength(){
    if(this.subjects){
      return this.subjects.length;
    }
  }
  
  /**
   * deletes the subject by the sid (subjectid)
   * @param sid subject id
   */
  deleteSubject(sid:string) {
    this.subjectService.deleteSubject(sid);
    this.calendarService.getEventsValue().subscribe(value => {
      value.forEach((row) =>{
        if(row.subjectSid == sid){
          this.calendarService.deleteEvent(row.eId);
        }
      })
    })
  }


  getSubject(sid:string){
    this.subjectService.getSubject(sid).toPromise().then((res) => {
      if(res.data()['name'] != undefined)
      this.presentAlertConfirm(res.data()['name'], sid)
    })
  }

  async presentAlertConfirm(message, sid) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Figyelmezetetés!',
      message: `Biztosan <strong>törölni</strong> szeretnéd a(z) <strong>${message}</strong> tantárgyat?`,
      buttons: [
        {
          text: 'Mégse',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {

          }
        }, {
          text: 'Törlés',
          handler: () => {
            this.deleteSubject(sid);
          }
        }
      ]
    });

    await alert.present();
  }

  editSubject(sid:string){
    this.router.navigate(['overview/subjects/edit', sid])
  }

  
}

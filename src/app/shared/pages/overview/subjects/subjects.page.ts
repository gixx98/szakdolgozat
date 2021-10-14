import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { Router} from '@angular/router'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.page.html',
  styleUrls: ['./subjects.page.scss'],
})
export class SubjectsPage implements OnInit {

  constructor(
    private subjectService:SubjectService,
    public alertController: AlertController,
    public router:Router
    ) { 

  }

  ngOnInit() {
    this.getSubjects();
  }

  subjects:any;

  getSubjects = () => 
    this.subjectService
    .getSubjects()
    .subscribe( res => (this.subjects = res));

  deleteSubject(sid:string) {
    // this.presentAlertConfirm();
    this.subjectService.delete(sid);
  }

  ifHasNoSubject(){
    if(this.subjects == null){
      return 'Még nincs tantárgy hozzáadva!';
    }
  }

  getSubject(sid:string){
    this.subjectService.getSubject(sid).toPromise().then((res) => {
      if(res.data()['name'] != null)
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

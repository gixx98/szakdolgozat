import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { toastController } from '@ionic/core';
import { Subject } from 'src/app/shared/models/interfaces/subject.model';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.page.html',
  styleUrls: ['./add-subject.page.scss'],
})
export class AddSubjectPage implements OnInit {
  

  addSubjectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    day: new FormControl('', Validators.required),
    hourStart: new FormControl('', Validators.required),
    hourEnd: new FormControl('', Validators.required),
    credit: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    mark: new FormControl('', [Validators.pattern("^[0-5]*$")]),
    room: new FormControl(''),
    teacher: new FormControl('')
  })

  constructor(
    public subjectService:SubjectService,
    public router:Router

  ) { }

  ngOnInit() {
  }

  add(){
    var subject:Subject = 
    {
      name: this.addSubjectForm.get('name').value,
      type: this.addSubjectForm.get('type').value,
      day: this.addSubjectForm.get('day').value,
      hourStart: this.addSubjectForm.get('hourStart').value.substr(11,8),
      hourEnd: this.addSubjectForm.get('hourEnd').value.substr(11,8),
      startDay: this.addSubjectForm.get('hourStart').value.substr(0,10),
      credit: this.addSubjectForm.get('credit').value,
      mark: this.addSubjectForm.get('mark').value,
      room: this.addSubjectForm.get('room').value,
      teacher: this.addSubjectForm.get('teacher').value,
    }

    this.subjectService.add(subject);
    
    toastController.create({
      color: 'success',
      duration: 750,
      message: 'Tárgy sikeresen hozzáadva!',
    }).then((toast)=>{
      toast.present();
    })

    this.router.navigate(['overview/subjects']);
    this.addSubjectForm.reset();
  }

}

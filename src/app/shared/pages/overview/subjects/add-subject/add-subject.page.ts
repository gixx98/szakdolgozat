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
    hour: new FormControl('', Validators.required),
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
      hour: this.addSubjectForm.get('hour').value,
      credit: this.addSubjectForm.get('credit').value,
      mark: this.addSubjectForm.get('mark').value,
      room: this.addSubjectForm.get('room').value,
      teacher: this.addSubjectForm.get('teacher').value,
    }
    this.subjectService.add(subject);
    
    toastController.create({
      color: 'success',
      duration: 1000,
      message: 'Tárgy felvéve!',
    }).then((toast)=>{
      toast.present();
    })

    this.router.navigate(['overview/subjects']);
    this.addSubjectForm.reset();
  }

}

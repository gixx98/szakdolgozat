import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.page.html',
  styleUrls: ['./edit-subject.page.scss'],
})
export class EditSubjectPage implements OnInit {

  constructor(
    public route:ActivatedRoute,
    public router: Router,
    public subjectService: SubjectService,
    public formBuilder: FormBuilder
  ) { }

  editSubjectForm = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    day: new FormControl('', Validators.required),
    hour: new FormControl('', Validators.required),
    credit: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    mark: new FormControl('', [Validators.pattern("^[0-5]*$")]),
    room: new FormControl(''),
    teacher: new FormControl('')
  })

  subjectRef:any;
  
  sid:any;
  ngOnInit() {
    this.sid = this.route.snapshot.paramMap.get('id');

    this.subjectService.subjectForEdit(this.sid).subscribe(res => {
      this.subjectRef = res;
      console.log(this.subjectRef);
      this.editSubjectForm.setValue({
        name: this.subjectRef.name,
        type:this.subjectRef.type,
        day: this.subjectRef.day,
        hour:  this.subjectRef.hour,
        credit: this.subjectRef.credit,
        mark: this.subjectRef.mark,
        room: this.subjectRef.room,
        teacher: this.subjectRef.teacher
      })
    })
  }

  onEditSubmit(){
    this.subjectService.editSubject(this.editSubjectForm.value, this.sid);
    this.router.navigate(['overview/subjects']);
  }
}

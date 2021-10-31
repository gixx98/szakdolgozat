import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { Subject } from '../models/interfaces/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjects: Observable<Subject[]>;

  constructor(
    public db: AngularFirestore
  ) {}
  
  getUser(){
    return JSON.parse(localStorage.getItem('user'))['uid'];
  }

  // name:any,type:any,day:any, hour:any, credit:any,mark?:any,room?:any, teacher?:any
  add(subject:Subject){

    this.db.collection('users').doc(this.getUser()).collection('subjects').add(
      subject
    ).then(res => {
        this.db.collection('users').doc(this.getUser()).collection('subjects').doc(res.id).update({
          'sid':res.id
        });
        this.db.collection('users').doc(this.getUser()).collection('events').add({
          title:subject.name,
          daysOfWeek:subject.day,
          startTime: subject.hourStart,
          endTime: subject.hourEnd,
          startRecur: subject.startDay,
          endRecur: '2021-12-08' //felev vege (implementalando)
        });
      })
    }


  getSubjects(){
    return this.db.collection('users').doc(this.getUser()).collection('subjects').snapshotChanges();
  }

  getMarks(){
    return this.db.collection('users').doc(this.getUser()).collection('subjects').get();
  }

  getSubject(sid:any){
    return this.db.collection('users').doc(this.getUser()).collection('subjects').doc(sid).get();
  }

  subjectForEdit(sid:any){
    return this.db.collection('users').doc(this.getUser()).collection('subjects').doc(sid).valueChanges();
  }

  delete(sid: string){
    this.db.collection('users').doc(this.getUser()).collection('subjects').doc(sid).delete();
  }

  editSubject(subject:Subject,sid:string){
    this.db.collection('users').doc(this.getUser()).collection('subjects').doc(sid).update(
      {
        name: subject.name,
        type: subject.type,
        day: subject.day,
        hourStart:  subject.hourStart,
        hourEnd:  subject.hourStart,
        credit: subject.credit,
        mark: subject.mark,
        room: subject.room,
        teacher: subject.teacher
      }
    )
  }
}

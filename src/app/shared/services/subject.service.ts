import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Subject } from '../models/interfaces/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

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
      })
    })

  }

  getSubjects(){
    return this.db.collection('users').doc(this.getUser()).collection('subjects').snapshotChanges();
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
        hour:  subject.hour,
        credit: subject.credit,
        mark: subject.mark,
        room: subject.room,
        teacher: subject.teacher
      }
    )
  }
}

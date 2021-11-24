import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat';
import { Observable } from 'rxjs';
import { Subject } from '../models/interfaces/subject.model';
import { CalendarService } from './calendar.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  subjects: Observable<Subject[]>;

  constructor(
    public db: AngularFirestore,
    public calendarService: CalendarService
  ) {}
  
  getUser(){
    return JSON.parse(localStorage.getItem('user'))['uid'];
  }

  /**
   * adds a subject to the database
   * @param subject 
   */
  add(subject:Subject){

    this.db.collection('users').doc(this.getUser()).collection('subjects').add(
      subject
    ).then(res => {
        this.db.collection('users').doc(this.getUser()).collection('subjects').doc(res.id).update({
          'sid':res.id
        });
        const newId = this.db.createId();

        this.calendarService.addEventBySubject(newId, res.id, subject);
      });
    }

/**
 * 
 * @returns all of the subjects from the database
 */
  getSubjects(){
    return this.db.collection('users').doc(this.getUser()).collection('subjects').snapshotChanges();
  }


  getSubjectsValue(){
    return this.db.collection('users').doc(this.getUser()).collection('subjects').valueChanges();
  }

  getMarks(){
    return this.db.collection('users').doc(this.getUser()).collection('subjects').get();
  }

  getSubject(sid:any){
    return this.db.collection('users').doc(this.getUser()).collection('subjects').doc(sid).get();
  }

  /**
   * 
   * @param sid 
   * @returns 
   */
  subjectForEdit(sid:any){
    return this.db.collection('users').doc(this.getUser()).collection('subjects').doc(sid).valueChanges();
  }

  /**
   * 
   * @param sid stands for the subject id that we want to delete
   */
  deleteSubject(sid: string){
    this.db.collection('users').doc(this.getUser()).collection('subjects').doc(sid).delete();
  }

/**
 * 
 * @param subject {Subject} the new subject values
 * @param sid {string} which subject will be edited (subject id)
 */
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
        completed: subject.completed,
        room: subject.room,
        teacher: subject.teacher
      }
    )
  }
}

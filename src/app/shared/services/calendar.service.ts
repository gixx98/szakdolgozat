import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Event } from '../models/interfaces/event.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(
    public db: AngularFirestore
  ) { }

  getUser(){
    return JSON.parse(localStorage.getItem('user'))['uid'];
  }

  getEvents(){
    return this.db.collection('users').doc(this.getUser()).collection('events').get();
  }

  getEventsValue(){
    return this.db.collection('users').doc(this.getUser()).collection('events').valueChanges();
  }

  deleteEvent(eid: string){
    this.db.collection('users').doc(this.getUser()).collection('events').doc(eid).delete();
  }

  addEvent(title,daysOfWeek,color,startTime,endTime){
    const newId = this.db.createId();
    var event:Event = {
      id: newId,
      title: title,
      daysOfWeek: daysOfWeek,
      color: color,
      startTime:startTime,
      endTime: endTime
    }

    this.db.collection('users').doc(this.getUser()).collection('events').doc(newId).set(event);
  }
  
  addEventBySubject(id:string, sId: string, subject:any){
    this.db.collection('users').doc(this.getUser()).collection('events').doc(id).set({
      eId: id,
      subjectSid: sId,
      title:subject.name,
      daysOfWeek:subject.day,
      startTime: subject.hourStart,
      endTime: subject.hourEnd,
      startRecur: subject.startDay,
      endRecur: '2021-12-08' //felev vege (implementalando)
    });
  }

  deleteEventById(id){
    this.db.collection('users').doc(this.getUser()).collection('events').doc(id).delete();
  }
}

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

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
  
}

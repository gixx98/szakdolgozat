import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(
    public db: AngularFirestore
  ) { }

  getSemester(){
    return this.db.collection('semester').doc('aToSbpDJxEfUq90Yr8Wo').get();
  }
}

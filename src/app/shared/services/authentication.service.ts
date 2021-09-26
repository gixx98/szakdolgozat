import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { User } from '../models/interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  constructor(
    public angularFirestore: AngularFirestore,
    public auth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) { 
    //user localstorage beállítása a userdata-ra
    this.auth.authState.subscribe(user => {
      if(user){
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      }else{
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }


  SignIn(email: string, password:string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }

  RegisterUser(email, password){
    return this.auth.createUserWithEmailAndPassword(email,password)
    .then((result)=>{
      result.user.sendEmailVerification();
      this.SetUserData(result.user);
    }).catch((error)=>{
      window.alert(error);
    })
  }

  PasswordRecover(passwordResetEmail){
    return this.auth.sendPasswordResetEmail(passwordResetEmail).
    then(()=>{
      window.alert('A jelszó újraállító email elküldve, kérlek ellenőrizd a berékező e-maileket.')
    }).catch((error)=>{
      window.alert(error)
    })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  get isEmailVerified(): boolean{
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false)  ? true : false;
  }

  GoogleAuth(){
  }

  AuthLogin(provider){
    return this.auth.signInWithPopup(provider)
    .then((result)=>{
      this.ngZone.run(() => {
        this.router.navigate(['overview']);
      })
      this.SetUserData(result.user);
    }).catch((error)=>{
      window.alert(error.message)
    })
  }

  SetUserData(user: User){
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.uid}`);
    const userData: User ={
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified
    }

    return userRef.set(userData,{
      merge:true
    })
  }

  SignOut(){
    return this.auth.signOut().then(() =>{
      localStorage.removeItem('user');
      this.router.navigate(['']);
    })
  }
}

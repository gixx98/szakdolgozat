import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { User } from '../models/interfaces/user.model';
import { toastController } from '@ionic/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData: any;

  constructor(
    public angularFirestore: AngularFirestore,
    public auth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    public alertController: AlertController

  ) {
    //user localstorage beállítása a userdata-ra
    this.auth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }


  SignIn(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password).then((res) => {
      res.user.reload();
      if (res.user.emailVerified) {
        this.router.navigate(['overview/account'])
        this.successfulLogin();
      }
    }).catch((error) => {
      if (error.message == 'Firebase: The email address is badly formatted. (auth/invalid-email).') {
        this.showEmailAlert();
      } else if (error.message == 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).' || error.message == 'Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).') {
        this.showBadPasswordAlert()
      }
    })
  }

  successfulLogin() {
    toastController.create({
      color: 'success',
      duration: 750,
      message: 'Sikeres bejelentkezés',
    }).then((toast) => {
      toast.present();
    })
  }

  successfulLogout() {
    toastController.create({
      color: 'success',
      duration: 750,
      position: 'bottom',
      message: 'Legközelebb találkozunk',
    }).then((toast) => {
      toast.present();
    })
  }

  showEmailAlert() {
    this.alertController.create({
      header: 'Email cím formátum hiba',
      message: 'Sajnos az email címet rossz formátumban adtad meg. Egy helyes formátum: sztepp@info.com',
      buttons: ['Rendben']
    }).then(res => {
      res.present();
    }).catch((error) => {
      window.alert(error)
    });
  }

  showBadPasswordAlert() {
    this.alertController.create({
      header: 'Rossz email vagy jelszó',
      message: 'Sajnos rossz email címet vagy jelszót adtál meg bejelentkezésnél, kérlek próbáld újra.',
      buttons: ['Rendben']
    }).then(res => {
      res.present();
    }).catch((error) => {
      window.alert(error)
    });
  }

  RegisterUser(email, password, name) {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.sendEmailVerification();
        this.SetUserData(result.user, name);
        this.router.navigate(['verify-email']);

      }).catch((error) => {
        this.errorMessages(error.message);
        console.log(error.message)
      })
  }

  errorMessages(error) {
    let message: string;
    let header: string;
    if (error == 'Firebase: The email address is badly formatted. (auth/invalid-email).') {
      header = 'Email cím formátum hiba';
      message = 'Sajnos az email címet rossz formátumban adtad meg. Egy helyes formátum: sztepp@info.com'
    } else if (error == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
      header = 'Gyenge jelszó';
      message = 'A jelszónak legalább 6 karakter hosszúnak kell lennie'
    } else if (error == 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).') {
      header = 'Email már használatban',
        message = 'Ez az email már használatban van, ha elfelejtetted a jelszavad, a bejelentkezési oldalon tudsz újat kérni'
    }

    this.alertController.create({
      header: header,
      message: message,
      buttons: ['Rendben']
    }).then(res => {
      res.present();
    }).catch((error) => {
      window.alert(error);
    });
  }

  PasswordRecover(passwordResetEmail) {
    return this.auth.sendPasswordResetEmail(passwordResetEmail).
      then(() => {
        window.alert('A jelszó újraállító email elküldve, kérlek ellenőrizd a berékező e-maileket.')
      }).catch((error) => {
        console.log(error)
      })
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  // AuthLogin(provider){
  //   return this.auth.signInWithPopup(provider)
  //   .then((result)=>{
  //     this.ngZone.run(() => {
  //       this.router.navigate(['overview/account']);
  //     })
  //     this.SetUserData(result.user, name);
  //   }).catch((error)=>{
  //     window.alert(error.message)
  //   })
  // }

  // googleLogin(){
  //   const provider = new firebase.default.auth.GoogleAuthProvider();
  //   return this.AuthLogin(provider)
  //   .then(value =>{
  //     console.log('Success', value);
  //   }).catch(error =>{
  //     console.log(error.message)
  //   })
  // }

  SetUserData(user: User, name:string) {
    const userRef: AngularFirestoreDocument<any> = this.angularFirestore.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: name,
      emailVerified: user.emailVerified
    }

    return userRef.set(userData, {
      merge: true
    })
  }

  SignOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['']);
    })
  }
}

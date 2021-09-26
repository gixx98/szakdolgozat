import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }

  login(email, password){
    this.authService.SignIn(email.value, password.value)
    .then((res)=>{
      res.user.reload();
      if(res.user.emailVerified){
        this.router.navigate(['overview'])
      }
    }).catch(error =>{
      if(error.message == 'Firebase: The email address is badly formatted. (auth/invalid-email).'){
        this.showEmailAlert();
      }else if(error.message == 'Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found).' || error.message =='Firebase: The password is invalid or the user does not have a password. (auth/wrong-password).'){
        this.showBadPasswordAlert()
      }
    })
  }

  showEmailAlert(){
    this.alertController.create({
      header: 'Email cím formátum hiba',
      message: 'Sajnos az email címet rossz formátumban adtad meg. Egy helyes formátum: sztepp@info.com',
      buttons: ['Rendben']
    }).then(res=> {
      res.present();
    });
  }

  showBadPasswordAlert(){
    this.alertController.create({
      header: 'Rossz email vagy jelszó',
      message: 'Sajnos rossz email címet vagy jelszót adtál meg bejelentkezésnél, kérlek próbáld újra.',
      buttons: ['Rendben']
    }).then(res=> {
      res.present();
    });
  }

}

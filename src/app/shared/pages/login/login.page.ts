import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.loginForm.reset();
  }
  login(){
    this.authService.SignIn(this.loginForm.get('email').value, this.loginForm.get('password').value);
  }



}

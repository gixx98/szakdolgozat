import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required,Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=\D*\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{6,30}$/)])
  });

  constructor(
    public authService: AuthenticationService,
    public router: Router,
  ) { }

  ngOnInit() {
  }

  
  getEmail(): any{
    return this.registerForm.get('email');
  }

  signUp(){
    this.authService.RegisterUser(this.registerForm.get('email').value, this.registerForm.get('password').value, this.registerForm.get('firstName').value);
    this.registerForm.reset()
  }

  getPasswordLength(){
    return this.registerForm.get('password').value.length;
  }
}

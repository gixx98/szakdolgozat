import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  forgotPwForm = new FormGroup({
    email: new FormControl('', Validators.required)
  })

  constructor(
    public auth:AuthenticationService
  ) { }

  ngOnInit() {
  }

  forgotPassword(){
    this.auth.PasswordRecover(this.forgotPwForm.get('email').value);
  }
}

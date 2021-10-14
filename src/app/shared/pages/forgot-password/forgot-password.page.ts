import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(
    public auth:AuthenticationService
  ) { }

  ngOnInit() {
  }

  forgotPassword(email){
    this.auth.PasswordRecover(email);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  getUser(){
    localStorage.getItem('user');
  }
}

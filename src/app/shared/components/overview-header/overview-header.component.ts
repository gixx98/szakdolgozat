import { Component, Input, OnInit } from '@angular/core';
import { toastController } from '@ionic/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-overview-header',
  templateUrl: './overview-header.component.html',
  styleUrls: ['./overview-header.component.scss'],
})
export class OverviewHeaderComponent implements OnInit {

  @Input()
  linkable: true;

  constructor(
    public authService: AuthenticationService,
  ) { }

  ngOnInit() {}
  

  logout(){
    this.authService.successfulLogout();
    this.authService.SignOut();
  }
}

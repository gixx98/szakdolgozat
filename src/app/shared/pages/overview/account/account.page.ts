import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit,OnDestroy {

  constructor() { }

  ngOnInit() {
  }
  
  ngOnDestroy(){
   localStorage.removeItem('user'); 
  }

  getUser(){
    if(JSON.parse(localStorage.getItem('user')) != null){
      var str = JSON.parse(localStorage.getItem('user'))['email'];
      str = /(.+)@/.exec(str)[1];
    }

    return str;
  }
}

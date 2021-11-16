import { AfterViewInit, Component, ElementRef, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit {

  checked = false;
  constructor(
    private menu:MenuController,
    private elementRef:ElementRef
    ) { }

  ngOnInit() {
    this.elementRef.nativeElement.querySelector('#toggle').addEventListener('onChange',()=>{
      console.log('Changed');
    })
  }

  ngAfterViewInit(){
    
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
  
  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  toggleDarkMode(event){
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.body.classList.toggle('dark', event.detail.checked);
      
    }else{
      document.body.classList.toggle('light', event.detail.checked);
    }
  }

}

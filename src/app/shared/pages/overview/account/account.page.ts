import { Component, OnDestroy, OnInit } from '@angular/core';
import { SemesterService } from 'src/app/shared/services/semester.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit,OnDestroy {

  constructor(
    public semesterService: SemesterService
  ) { }
  
  beiratkozas: string = "";
  vizsga: string = "";
  szorgalmi: string = "";
  utovizsga: string = "";

  ngOnInit() {
    this.getSemester();
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

  getSemester(){
    var semester: any;
    this.semesterService.getSemester().toPromise().then((row)=>{
      semester = row.data();
    }).then(()=>{
      this.beiratkozas = semester.beiratkozas;
      this.vizsga = semester.vizsga;
      this.szorgalmi = semester.szorgalmi;
      this.utovizsga = semester.utovizsga;
    })

  }
}

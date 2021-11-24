import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})

export class CalculatorPage implements OnInit{
  //az összes regisztrált tantárgy jegye és kredite objektumként egy tömbben;
  marksAndCredits: Array<{ mark: number, credit: number }> = [];
  marksAndCreditsForCorr: Array<{credit: number}> = [];

  nameCreditMarks: Array<{name: string, credit: string, mark: string}> = [];
  //összesen felvett kredit
  credit: any;;

  //súlyozott tanulmányi átlaghoz szükséges
  gpa: any;
  //kreditindex
  creditIndex: any;

  //korrigált kreditindex
  corrCreditIndex: any;

  subs: any;

  constructor(
    public subjectService: SubjectService,
  ) { }


  ngOnInit() {
    this.subjectService.getSubjectsValue().subscribe(change => {
      this.marksAndCredits = [];
      this.nameCreditMarks = [];
      this.marksAndCreditsForCorr = [];

      change.forEach((doc) =>{
        if(doc.mark != ""){
          this.marksAndCredits.push({mark:parseInt(doc.mark), credit:parseInt(doc.credit)})
        }
        if(doc.completed == true){
          this.marksAndCreditsForCorr.push({credit: parseInt(doc.credit)});
        }
        this.nameCreditMarks.push({name:doc.name, credit: doc.credit, mark: doc.mark})
      }); 
      this.credit = this.sumCredit();
      this.gpa = this.sumGpa();
      this.creditIndex = this.sumCreditIndex();
      this.corrCreditIndex = (this.creditIndex * this.sumCorrCreditIndex() ).toFixed(2);
      console.log(this.marksAndCreditsForCorr);
    })
  }

  /**
   * 
   * @returns the summed credits of all subjects
   */
  sumCredit(){
    var obj = this.marksAndCredits;
    var sumCredit:number = 0;
    
    for(var i in obj){
      sumCredit += obj[i].credit;
    }
    return sumCredit;
  }


  /**
   * sum(Ei * KTi) / sum(KTi)
   * @returns gpa (Grade Point Average)
   */
  sumGpa(){
    var obj:Object = this.marksAndCredits;
    var gpa:number = 0;

    for(var i in obj){
      gpa += (obj[i].credit * obj[i].mark);
    }

    gpa = Math.round((gpa / this.credit) * 100) / 100;

    return gpa;
  }

  sumCreditIndex(){
    var obj:Object = this.marksAndCredits;
    var creditIndex:number = 0;

    for(var i in obj){
      creditIndex += (obj[i].credit * obj[i].mark);
    }

    creditIndex = Math.round((creditIndex / 30) * 100) / 100 ;
    return creditIndex;
  }

  sumCorrCreditIndex(){
    var obj = this.marksAndCreditsForCorr;
    var completedCredits: number = 0;

    for(var i in obj){
      completedCredits += (obj[i].credit);
    }

    return completedCredits / this.sumCredit() ;
  }
}

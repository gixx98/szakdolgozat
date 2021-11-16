import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { SubjectService } from 'src/app/shared/services/subject.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})

export class CalculatorPage implements OnInit, OnChanges{
  //az összes regisztrált tantárgy jegye és kredite objektumként egy tömbben;
  marksAndCredits: Array<{ mark: number, credit: number }> = [];

  nameCreditMarks: Array<{name: string, credit: string, mark: string}> = [];
  //összesen felvett kredit
  credit: any = 0;

  //súlyozott tanulmányi átlaghoz szükséges
  gpa: any = 0;
  //kreditindex
  creditIndex: any = 0;

  //korrigált kreditindex
  corrCreditIndex: any = 0;

  subs: any;



  constructor(
    public subjectService: SubjectService,
  ) { }


  ngOnInit() {
    // this.subjectService.getMarks().toPromise()
    // .then((snapshot) => {
    //   snapshot.docs.forEach((doc)=>{
    //     if(doc.data().mark != ""){
    //     this.marksAndCredits.push({mark:parseInt(doc.data().mark), credit:parseInt(doc.data().credit)})
    //     this.nameCreditMarks.push({name:doc.data().name, credit: doc.data().credit, mark: doc.data().mark})
    //     }
    //   });
    //   console.log(this.marksAndCredits);
    //   console.log(this.nameCreditMarks)
    //   this.credit = this.sumCredit();
    //   this.gpa = this.sumGpa();
    //   this.creditIndex = this.sumCreditIndex();
    // })

    this.subjectService.getSubjectsValue().subscribe(change => {
      this.marksAndCredits = [];
      this.nameCreditMarks = [];
      change.forEach((doc) =>{
        if(doc.mark != ""){
          this.marksAndCredits.push({mark:parseInt(doc.mark), credit:parseInt(doc.credit)})
        }
        this.nameCreditMarks.push({name:doc.name, credit: doc.credit, mark: doc.mark})
      }) 
      this.credit = this.sumCredit();
      this.gpa = this.sumGpa();
      this.creditIndex = this.sumCreditIndex();
    })
    

  }

  refresh(){
    this.marksAndCredits = [];
    this.nameCreditMarks = [];
    this.ngOnInit();
  }

  ngOnChanges(){
  }

  ngOnDestroy(){
  }

  

  onClick(){
    console.log(this.sumCredit());
  }
  
  //Összeadja a kreditek számát
  //Majd visszaadja
  sumCredit(){
    var obj = this.marksAndCredits;
    var sumCredit:number = 0;
    
    for(var i in obj){
      sumCredit += obj[i].credit;
    }
    return sumCredit;
  }

  //sum(Ei * KTi) / sum(KTi)
  //tehát venni kell az obj mark * credit értékét
  //azt pedig szummázni
  //majd elosztani a creditSum-mal
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
    
  }

}

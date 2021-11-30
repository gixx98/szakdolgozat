import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gyik',
  templateUrl: './gyik.page.html',
  styleUrls: ['./gyik.page.scss'],
})
export class GyikPage implements OnInit {

  search: string;

  questions = [
    {
      "question": "Hányszor lehet vizsgázni vagy felvenni egy tárgyat?",
      "answer": "Egy tárgyat összesen háromszor lehet felvenni, egy félévben összesen háromszor lehet vizsgázni. Emellett összesen hatszor lehet vizsgázni egy tárgyból egy képzés során."
    },
    {
      "question": "Egy félévben maximum hány kreditet lehet felvenni, illetve mennyi ajánlott?",
      "answer": "Összesen 45 kreditet lehet egy félévben felvenni, ennél többet maximum külön engedéllyel kérhetsz. Az ajánlott haladáshoz legalább 30 kreditet érdemes felvenni."
    },
    {
      "question": "Állami képzésen való bentmaradás feltételei",
      "answer": "Jelenleg két félév alatt 36 teljesített kredit és elméleti szakokon 3.5 gyakorlati szakokon pedig 3.0 súlyozott tanulmányi átlag kell."
    },
    {
      "question": "Első éves hallgatóként muszáj az első két félévben abszolválnom a 2 félév kötelező testnevelés kurzust, vagy a képzés bármelyik későbbi féléve alatt is teljesíthetőek?",
      "answer": "Nem kötelező, de ajánlott tanulmányaik első féléveiben teljesíteni a kötelező (2 félév) testnevelés tárgyakat."
    },
    // {
    //   "question": "",
    //   "answer": ""
    // },
    // {
    //   "question": "",
    //   "answer": ""
    // },
    // {
    //   "question": "",
    //   "answer": ""
    // },
    // {
    //   "question": "",
    //   "answer": ""
    // },
    // {
    //   "question": "",
    //   "answer": ""
    // }
  ]
  constructor() { }

  ngOnInit() {
  }

}

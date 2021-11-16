import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Event} from 'src/app/shared/models/interfaces/event.model'
import { CalendarService } from 'src/app/shared/services/calendar.service';

@Component({
  selector: 'app-add-calendar',
  templateUrl: './add-calendar.page.html',
  styleUrls: ['./add-calendar.page.scss'],
})
export class AddCalendarPage implements OnInit {

  addEventForm = new FormGroup({
    name: new FormControl('', Validators.required),
    day: new FormControl('', Validators.required),
    hourStart: new FormControl('', Validators.required),
    hourEnd: new FormControl('', Validators.required),
    color: new FormControl('')
  })



  constructor(
    public calendarService: CalendarService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addEvent(){
    // var event:Event = {
      var title = this.addEventForm.get('name').value;
      var daysOfWeek = this.addEventForm.get('day').value;
      var color = this.addEventForm.get('color').value;
      var startTime = this.addEventForm.get('hourStart').value.substr(11,8);
      var endTime = this.addEventForm.get('hourEnd').value.substr(11,8);

    this.calendarService.addEvent(title,daysOfWeek,color,startTime,endTime);
    this.router.navigate(['overview/calendar'])

  }
}

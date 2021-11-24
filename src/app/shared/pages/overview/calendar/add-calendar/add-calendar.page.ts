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
    description: new FormControl('', Validators.required),
    start: new FormControl('', Validators.required),
    end: new FormControl('', Validators.required),
    color: new FormControl(''),
    allDay: new FormControl('')
  })



  constructor(
    public calendarService: CalendarService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addEvent(){
      var title = this.addEventForm.get('name').value;
      var description = this.addEventForm.get('description').value;
      var color = this.addEventForm.get('color').value;
      var start = this.addEventForm.get('start').value;
      var end = this.addEventForm.get('end').value;
      var allday = this.addEventForm.get('allDay').value;

    this.calendarService.addEvent(title, description, color, start, end, allday);
    this.router.navigate(['overview/calendar'])

  }
}

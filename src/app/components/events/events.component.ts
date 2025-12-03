import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html'
})
export class EventsComponent implements OnInit {

  events = [
    { id: 1, title: "Wedding Decor" },
    { id: 2, title: "Birthday Decor" },
    { id: 3, title: "Catering Services" },
    { id: 4, title: "Guest Services" },
    { id: 5, title: "Security Services" },
    { id: 6, title: "Entertainment Services" },
    { id: 7, title: "Furniture & Equipment Rental" }
  ];

  constructor() {}

  ngOnInit(): void {
  }
}

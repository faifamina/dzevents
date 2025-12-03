import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-bookings',
  templateUrl: './admin-bookings.component.html',
})
export class AdminBookingsComponent implements OnInit {

  bookings: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // No backend - bookings array remains empty
  }
}
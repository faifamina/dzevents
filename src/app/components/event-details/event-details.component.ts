import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit {

  events = [
    { id: 1, title: "Wedding Decor" },
    { id: 2, title: "Birthday Decor" },
    { id: 3, title: "Catering Services" },
    { id: 4, title: "Guest Services" },
    { id: 5, title: "Security Services" },
    { id: 6, title: "Entertainment Services" },
    { id: 7, title: "Furniture & Equipment Rental" }
  ];

  event: any = {};
  booking: any = {
    ownerName: '',
    phoneNumber: '',
    email: '',
    location: '',
    address: '',
    event: {}
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.event = this.events.find(e => e.id === Number(id)) || {};
    this.booking.event = this.event;
  }

  submitBooking() {
    const bookingNo = Math.floor(Math.random() * 10000);
    
    // Prepare email content
    const subject = `New Booking Request - ${this.event.title || 'Event'}`;
    const body = `
Booking Details:
================

Booking Number: ${bookingNo}
Event: ${this.event.title || 'N/A'}
Customer Name: ${this.booking.ownerName}
Phone Number: ${this.booking.phoneNumber}
Email: ${this.booking.email}
Location: ${this.booking.location}
Address: ${this.booking.address}

Please contact the customer to confirm this booking.
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:dzevents10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    alert(`Booking Confirmed! Booking No: ${bookingNo}`);
  }
}
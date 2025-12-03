import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingForm!: FormGroup;
  events = [
    { id: 1, title: "Wedding Decor" },
    { id: 2, title: "Birthday Decor" },
    { id: 3, title: "Catering Services" },
    { id: 4, title: "Guest Services" },
    { id: 5, title: "Security Services" },
    { id: 6, title: "Entertainment Services" },
    { id: 7, title: "Furniture & Equipment Rental" }
  ];

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.bookingForm = this.fb.group({
      eventId: [null, Validators.required],
      ownerName: ['', [Validators.required, Validators.minLength(2)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9+\-\s]{7,20}$/)]],
      email: ['', [Validators.required, Validators.email]],
      location: ['', Validators.required],
      address: ['', Validators.required],
      bookingDate: [new Date().toISOString().split("T")[0], Validators.required],  // <-- added

     
      additionalNotes: ['']
    });
  }
 
  submit() {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    const f = this.bookingForm.value;
    const selectedEvent = this.events.find(e => e.id === Number(f.eventId));
    const bookingNo = Math.floor(Math.random() * 10000);

    // Prepare booking data for email
    const bookingData = {
      bookingNumber: bookingNo,
      eventName: selectedEvent?.title || 'N/A',
      ownerName: f.ownerName,
      phoneNumber: f.phoneNumber,
      email: f.email,
      location: f.location,
      address: f.address,
      bookingDate: f.bookingDate,
      additionalNotes: f.additionalNotes
    };

    // Send email using Web3Forms (simpler method)
    this.emailService.sendBookingEmailViaWeb3Forms(bookingData)
      .then((response) => {
        console.log('Email sent successfully!', response);
        this.isSubmitting = false;
        if (response.success) {
          this.successMessage = `Booking confirmed! Booking No: ${bookingNo}. Confirmation email sent.`;
          this.bookingForm.reset();
        } else {
          this.errorMessage = 'Failed to send booking. Please try again.';
        }
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        this.isSubmitting = false;
        this.errorMessage = 'Failed to send booking. Please try again or contact us directly.';
      });
  }

  // Alternative submit method using EmailJS (if you prefer)
  submitWithEmailJS() {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    const f = this.bookingForm.value;
    const selectedEvent = this.events.find(e => e.id === Number(f.eventId));
    const bookingNo = Math.floor(Math.random() * 10000);

    const bookingData = {
      bookingNumber: bookingNo,
      eventName: selectedEvent?.title || 'N/A',
      ownerName: f.ownerName,
      phoneNumber: f.phoneNumber,
      email: f.email,
      location: f.location,
      address: f.address,
      bookingDate: f.bookingDate,
      additionalNotes: f.additionalNotes
    };

    this.emailService.sendBookingEmail(bookingData)
      .then((response) => {
        console.log('Email sent successfully!', response);
        this.isSubmitting = false;
        this.successMessage = `Booking confirmed! Booking No: ${bookingNo}. Confirmation email sent.`;
        this.bookingForm.reset();
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        this.isSubmitting = false;
        this.errorMessage = 'Failed to send booking. Please try again or contact us directly.';
      });
  }

  // Alternative submit method using Formspree
  submitWithFormspree() {
    if (this.bookingForm.invalid) {
      this.bookingForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.successMessage = '';
    this.errorMessage = '';

    const f = this.bookingForm.value;
    const selectedEvent = this.events.find(e => e.id === Number(f.eventId));
    const bookingNo = Math.floor(Math.random() * 10000);

    const bookingData = {
      bookingNumber: bookingNo,
      eventName: selectedEvent?.title || 'N/A',
      ownerName: f.ownerName,
      phoneNumber: f.phoneNumber,
      email: f.email,
      location: f.location,
      address: f.address,
      bookingDate: f.bookingDate,
      additionalNotes: f.additionalNotes
    };

    this.emailService.sendBookingEmailViaFormspree(bookingData)
      .then((response) => {
        console.log('Email sent successfully!', response);
        this.isSubmitting = false;
        this.successMessage = `Booking confirmed! Booking No: ${bookingNo}. Confirmation email sent.`;
        this.bookingForm.reset();
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        this.isSubmitting = false;
        this.errorMessage = 'Failed to send booking. Please try again or contact us directly.';
      });
  }

  
}
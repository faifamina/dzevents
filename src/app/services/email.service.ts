import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  // EmailJS configuration
  private serviceId = 'YOUR_SERVICE_ID';
  private templateId = 'YOUR_TEMPLATE_ID';
  private publicKey = 'YOUR_PUBLIC_KEY';

  // Web3Forms configuration (Alternative method - easier setup)
  private web3formsKey = '332584ae-2bbf-4c6a-b994-f6214a2365f2';

  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(this.publicKey);
  }

  // Method 1: EmailJS (requires account setup)
  sendBookingEmail(bookingData: any): Promise<any> {
    const templateParams = {
      to_email: 'dzevents10@gmail.com',
      booking_number: bookingData.bookingNumber,
      event_name: bookingData.eventName,
      customer_name: bookingData.ownerName,
      phone_number: bookingData.phoneNumber,
      customer_email: bookingData.email,
      location: bookingData.location,
      address: bookingData.address,
      booking_date: bookingData.bookingDate,
      additional_notes: bookingData.additionalNotes || 'None'
    };

    return emailjs.send(
      this.serviceId,
      this.templateId,
      templateParams
    );
  }

  // Method 2: Web3Forms (simpler - just needs access key)
  sendBookingEmailViaWeb3Forms(bookingData: any): Promise<any> {
    const formData = new FormData();
    
    formData.append('access_key', this.web3formsKey);
    formData.append('subject', `New Booking Request - ${bookingData.eventName}`);
    formData.append('from_name', 'DZ Events Booking System');
    
    // Booking details
    formData.append('Booking Number', bookingData.bookingNumber);
    formData.append('Event', bookingData.eventName);
    formData.append('Customer Name', bookingData.ownerName);
    formData.append('Phone Number', bookingData.phoneNumber);
    formData.append('Customer Email', bookingData.email);
    formData.append('Location', bookingData.location);
    formData.append('Address', bookingData.address);
    formData.append('Booking Date', bookingData.bookingDate);
    formData.append('Additional Notes', bookingData.additionalNotes || 'None');

    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    }).then(response => response.json());
  }

  // Method 3: Formspree (alternative)
  sendBookingEmailViaFormspree(bookingData: any): Promise<any> {
    const formspreeEndpoint = 'YOUR_FORMSPREE_ENDPOINT'; // e.g., https://formspree.io/f/xyzabc123
    
    const emailBody = {
      subject: `New Booking Request - ${bookingData.eventName}`,
      message: `
Booking Details:
================

Booking Number: ${bookingData.bookingNumber}
Event: ${bookingData.eventName}
Customer Name: ${bookingData.ownerName}
Phone Number: ${bookingData.phoneNumber}
Email: ${bookingData.email}
Location: ${bookingData.location}
Address: ${bookingData.address}
Booking Date: ${bookingData.bookingDate}
Additional Notes: ${bookingData.additionalNotes || 'None'}
      `,
      _replyto: bookingData.email,
      _subject: `New Booking Request - ${bookingData.eventName}`
    };

    return fetch(formspreeEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailBody)
    }).then(response => response.json());
  }

  // Method 4: GetForm (No signup needed - instant setup)
  sendBookingEmailViaGetForm(bookingData: any): Promise<any> {
    const getformEndpoint = 'YOUR_GETFORM_ENDPOINT'; // e.g., https://getform.io/f/your-form-id
    
    const formData = new FormData();
    formData.append('Booking Number', bookingData.bookingNumber.toString());
    formData.append('Event', bookingData.eventName);
    formData.append('Customer Name', bookingData.ownerName);
    formData.append('Phone Number', bookingData.phoneNumber);
    formData.append('Customer Email', bookingData.email);
    formData.append('Location', bookingData.location);
    formData.append('Address', bookingData.address);
    formData.append('Booking Date', bookingData.bookingDate);
    formData.append('Additional Notes', bookingData.additionalNotes || 'None');

    return fetch(getformEndpoint, {
      method: 'POST',
      body: formData
    }).then(response => response.json());
  }

  // Method 5: SMTP.js (Direct email from browser - NO backend needed)
  sendBookingEmailViaSMTPJS(bookingData: any): Promise<any> {
    // Note: Requires SMTP.js library loaded in index.html
    // Add this to index.html: <script src="https://smtpjs.com/v3/smtp.js"></script>
    
    const emailBody = `
<h2>New Booking Request</h2>
<table style="border-collapse: collapse; width: 100%;">
  <tr style="background-color: #f2f2f2;">
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Booking Number:</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">${bookingData.bookingNumber}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Event:</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">${bookingData.eventName}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Customer Name:</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">${bookingData.ownerName}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone Number:</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">${bookingData.phoneNumber}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">${bookingData.email}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Location:</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">${bookingData.location}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Address:</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">${bookingData.address}</td>
  </tr>
  <tr>
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Booking Date:</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">${bookingData.bookingDate}</td>
  </tr>
  <tr style="background-color: #f2f2f2;">
    <td style="padding: 8px; border: 1px solid #ddd;"><strong>Additional Notes:</strong></td>
    <td style="padding: 8px; border: 1px solid #ddd;">${bookingData.additionalNotes || 'None'}</td>
  </tr>
</table>
    `;

    // Check if SMTP.js is loaded
    if (typeof (window as any).Email === 'undefined') {
      return Promise.reject('SMTP.js not loaded. Add script to index.html');
    }

    return (window as any).Email.send({
      SecureToken: 'YOUR_SMTPJS_SECURE_TOKEN', // Get from https://smtpjs.com/
      To: 'dzevents10@gmail.com',
      From: 'dzevents10@gmail.com',
      Subject: `New Booking Request - ${bookingData.eventName}`,
      Body: emailBody
    });
  }

  // Method 6: Simple HTTP POST to any webhook/API
  sendBookingEmailViaWebhook(bookingData: any): Promise<any> {
    const webhookUrl = 'YOUR_WEBHOOK_URL'; // Can be Zapier, Make.com, n8n, etc.
    
    return fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        to: 'dzevents10@gmail.com',
        subject: `New Booking Request - ${bookingData.eventName}`,
        bookingNumber: bookingData.bookingNumber,
        eventName: bookingData.eventName,
        customerName: bookingData.ownerName,
        phoneNumber: bookingData.phoneNumber,
        email: bookingData.email,
        location: bookingData.location,
        address: bookingData.address,
        bookingDate: bookingData.bookingDate,
        additionalNotes: bookingData.additionalNotes || 'None'
      })
    }).then(response => response.json());
  }
}

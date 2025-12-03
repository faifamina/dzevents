# EmailJS Setup Guide

To enable email functionality for booking submissions, follow these steps:

## 1. Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)
3. Verify your email address

## 2. Add Email Service
1. Go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your Gmail account (dzevents10@gmail.com)
5. Copy the **Service ID** (e.g., "service_abc123")

## 3. Create Email Template
1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Set up the template with these variables:

**Subject:**
```
New Booking Request - {{event_name}}
```

**Content:**
```
Booking Details:
================

Booking Number: {{booking_number}}
Event: {{event_name}}
Customer Name: {{customer_name}}
Phone Number: {{phone_number}}
Email: {{customer_email}}
Location: {{location}}
Address: {{address}}
Booking Date: {{booking_date}}
Additional Notes: {{additional_notes}}

Please contact the customer to confirm this booking.
```

**To Email:** {{to_email}}

4. Save the template and copy the **Template ID** (e.g., "template_xyz789")

## 4. Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (e.g., "abcdefghijk123456")

## 5. Update the Code
Open `src/app/services/email.service.ts` and replace:

```typescript
private serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
private templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
private publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

## 6. Test
1. Run your Angular app: `ng serve`
2. Fill out the booking form
3. Submit the form
4. Check dzevents10@gmail.com for the booking email

## Troubleshooting
- If emails don't arrive, check the EmailJS dashboard for error logs
- Make sure your Gmail account is properly connected
- Verify all IDs are correctly copied
- Check browser console for any errors

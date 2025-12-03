# Email Setup Guide - Three Methods

Choose one of these methods to send booking emails to dzevents10@gmail.com

---

## 🌟 RECOMMENDED: Method 1 - Web3Forms (Easiest & Free)

### Setup Steps:
1. Go to https://web3forms.com/
2. Click "Get Started Free"
3. Enter your email: **dzevents10@gmail.com**
4. Verify your email
5. Copy your **Access Key** (looks like: "abc123-def456-ghi789")

### Update Code:
Open `src/app/services/email.service.ts` and replace:
```typescript
private web3formsKey = 'YOUR_WEB3FORMS_ACCESS_KEY';
```

### Features:
- ✅ 250 submissions/month (free)
- ✅ No complex setup
- ✅ Works immediately
- ✅ Email notifications to dzevents10@gmail.com
- ✅ Already configured in your code (default method)

---

## Method 2 - EmailJS (More Features)

### Setup Steps:
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

#### Add Email Service:
1. Go to "Email Services" → "Add New Service"
2. Choose Gmail
3. Connect dzevents10@gmail.com
4. Copy the **Service ID**

#### Create Email Template:
1. Go to "Email Templates" → "Create New Template"
2. Template Name: "Booking Notification"
3. **Subject:** `New Booking Request - {{event_name}}`
4. **Content:**
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
```
5. **To Email:** {{to_email}}
6. Copy the **Template ID**

#### Get Public Key:
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Update Code:
Open `src/app/services/email.service.ts` and replace:
```typescript
private serviceId = 'YOUR_SERVICE_ID';
private templateId = 'YOUR_TEMPLATE_ID';
private publicKey = 'YOUR_PUBLIC_KEY';
```

Then in `src/app/components/booking/booking.component.ts`, change the submit method to call:
```typescript
this.emailService.sendBookingEmail(bookingData)
```

### Features:
- ✅ 200 emails/month (free)
- ✅ Custom email templates
- ✅ Email tracking
- ✅ More customization options

---

## Method 3 - Formspree (Simple Alternative)

### Setup Steps:
1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Set email to: **dzevents10@gmail.com**
5. Copy your **Form Endpoint** (looks like: `https://formspree.io/f/xyzabc123`)

### Update Code:
Open `src/app/services/email.service.ts` and replace:
```typescript
private formspreeEndpoint = 'YOUR_FORMSPREE_ENDPOINT';
```

Then in `src/app/components/booking/booking.component.ts`, change the submit method to call:
```typescript
this.emailService.sendBookingEmailViaFormspree(bookingData)
```

### Features:
- ✅ 50 submissions/month (free)
- ✅ Very simple setup
- ✅ Spam filtering included
- ✅ Form management dashboard

---

## Quick Comparison

| Feature | Web3Forms | EmailJS | Formspree |
|---------|-----------|---------|-----------|
| Free Limit | 250/month | 200/month | 50/month |
| Setup Time | 2 minutes | 5 minutes | 3 minutes |
| Customization | Basic | Advanced | Medium |
| **Recommended** | ⭐ **YES** | Good | Good |

---

## Testing

After setup:
1. Run: `ng serve`
2. Go to the booking page
3. Fill out the form
4. Submit
5. Check **dzevents10@gmail.com** for the booking email

---

## Current Configuration

Your app is currently set to use **Web3Forms** (Method 1).
Just get your access key and update the code!

# Email Integration - Client Side

The Blai client is now integrated with the Resend email service through the backend API.

## 📧 Where Emails Are Sent

All form submissions send emails to: **njoyaalexander71@gmail.com**

---

## ✅ Integrated Forms

### 1. **Contact Form** (`/contact`)

**Located at:** `http://localhost:3000/contact`

**Features:**
- Full name
- Email
- Phone (optional)
- Subject
- Message
- Form validation
- Loading states
- Success/error messages
- Auto-reset after submission

**What happens:**
When a visitor submits the contact form, an email is sent to `njoyaalexander71@gmail.com` with:
- Contact person's name
- Their email (for reply)
- Subject
- Phone number (if provided)
- Full message

---

## 🔧 How It Works

### Client Flow
```
User fills form → Submit → Validates → API Call → Response

Success:
- Shows green success message
- Form resets
- Message auto-hides after 5 seconds

Error:
- Shows red error message
- Form stays filled
- User can retry
```

### Backend Flow
```
API receives request → Validates data → Sends email via Resend → Returns response
```

### Email Delivery
```
Resend → njoyaalexander71@gmail.com
```

---

## 📝 API Endpoint Used

```
POST /api/emails/contact

Body:
{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Inquiry about services",
    "message": "I would like to know more..."
}
```

---

## ⚙️ Environment Setup

Create `client/.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

For production:
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com/api
```

---

## 🎨 Form Validation

All forms use `react-hook-form` + `yup` for validation:

**Contact Form Rules:**
- Name: Required
- Email: Required, must be valid email
- Phone: Optional
- Subject: Required
- Message: Required

---

## 💡 Success Messages

**Contact Form:**
```
✅ Message sent successfully! We'll get back to you soon.
```

Message auto-disappears after 5 seconds.

---

## 🚨 Error Handling

Errors are displayed to users:
- API connection errors
- Validation errors
- Server errors
- Email sending failures

---

## 🧪 Testing

### Test Contact Form

1. Start both servers:
   ```bash
   # Terminal 1
   cd server && npm run dev
   
   # Terminal 2
   cd client && npm run dev
   ```

2. Go to: `http://localhost:3000/contact`

3. Fill out the form and submit

4. Check email at: `njoyaalexander71@gmail.com`

---

## 📊 Email Notifications Summary

| Event | Form/Action | Recipient |
|-------|-------------|-----------|
| Contact Form | `/contact` page | njoyaalexander71@gmail.com |
| User Registration | Sign up | njoyaalexander71@gmail.com |
| Welcome Email | Sign up | New user's email |
| New Blog | Create blog | njoyaalexander71@gmail.com |
| Blog Update | Edit blog | njoyaalexander71@gmail.com |

---

## 🔌 Using the Email API Service

You can use the email API service in other components:

```javascript
import api from '@/src/services/api';

// Send contact email
const result = await api.email.sendContactForm({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Subject',
    message: 'Message'
});
```

---

## 📚 Related Documentation

- **Server Email Setup:** `server/RESEND_SETUP.md`
- **API Service:** `client/src/services/api.js`
- **Contact Form:** `client/src/forms/contact-us-form.jsx`

---

**✅ Email integration complete! All contact forms now send emails to njoyaalexander71@gmail.com**


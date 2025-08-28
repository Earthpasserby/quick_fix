# QuickFix Waitlist Form Setup Guide

## Option 1: Google Forms (Recommended - Free)

### Step 1: Create Google Form

1. Go to [forms.google.com](https://forms.google.com)
2. Click "+" to create a new form
3. Name it "QuickFix Waitlist"
4. Add a question: "Email Address" (type: Short answer)
5. Make it required
6. Click "Send" and copy the form URL

### Step 2: Get Form Details

1. Open your form in edit mode
2. Right-click on the email question and "Inspect Element"
3. Look for `name="entry.XXXXXXXXX"` in the HTML
4. Copy the entry ID (e.g., `entry.123456789`)

### Step 3: Update Code

In `src/Components/WaitlistForm.jsx`, replace:

```javascript
const googleFormUrl =
  "https://docs.google.com/forms/d/YOUR_FORM_ID/formResponse";
const emailEntryId = "entry.123456789";
```

With your actual values:

```javascript
const googleFormUrl =
  "https://docs.google.com/forms/d/1ABC123DEF456GHI789JKL/formResponse";
const emailEntryId = "entry.987654321";
```

## Option 2: Formspree (Easy Alternative)

### Step 1: Sign Up

1. Go to [formspree.io](https://formspree.io)
2. Create free account
3. Create new form
4. Copy the endpoint URL

### Step 2: Update Code

Replace the Google Forms code with:

```javascript
const formspreeUrl = "https://formspree.io/f/YOUR_FORM_ID";

await fetch(formspreeUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email: email }),
});
```

## Option 3: Netlify Forms (If Deploying to Netlify)

### Step 1: Update HTML

In `index.html`, add `data-netlify="true"` to the form:

```html
<form data-netlify="true" name="waitlist"></form>
```

### Step 2: Update Code

Replace with:

```javascript
const netlifyUrl = "/.netlify/functions/submit-waitlist";

await fetch(netlifyUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email: email }),
});
```

## Testing Your Form

1. Fill out the email field
2. Submit the form
3. Check your Google Forms responses (or Formspree dashboard)
4. Verify the success modal appears

## Troubleshooting

- **CORS errors**: Google Forms requires `mode: 'no-cors'`
- **Form not submitting**: Check the entry ID is correct
- **Modal not showing**: Check browser console for errors

## Next Steps

Once working, you can:

- Add more fields (name, city, etc.)
- Set up email notifications
- Export responses to Google Sheets
- Integrate with email marketing tools

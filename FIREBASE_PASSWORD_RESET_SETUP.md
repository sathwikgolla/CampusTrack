# Firebase Password Reset Email Setup Guide

## Issue: Not Receiving Password Reset Emails

If you're not receiving password reset emails, follow these steps to configure Firebase email sending:

## Step 1: Configure Email Templates in Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **campus-tracker-38f29**
3. Navigate to **Authentication** > **Templates**
4. Click on **Password reset** template

## Step 2: Customize Email Template

1. **Email Subject**: Customize the subject line (e.g., "Reset your CampusTrack password")
2. **Email Body**: Customize the email content
3. **Action URL**: Should be set to your app's URL (e.g., `http://localhost:5173/login` for development)
4. Click **Save**

## Step 3: Configure Authorized Domains

1. Go to **Authentication** > **Settings** > **Authorized domains**
2. Make sure `localhost` is in the list (for development)
3. Add your production domain when deploying

## Step 4: Check Email Provider Settings

1. Go to **Authentication** > **Settings** > **Users**
2. Check if email sending is enabled
3. Verify your project's email sending quota

## Step 5: Common Issues and Solutions

### Issue 1: Email goes to Spam
- **Solution**: Check your spam/junk folder
- Ask users to mark Firebase emails as "Not Spam"
- Consider using a custom email domain (requires Firebase Blaze plan)

### Issue 2: Email not sent at all
- **Check**: Make sure Email/Password authentication is enabled
- **Check**: Verify the email exists in Firebase Auth
- **Check**: Check browser console for errors (F12)

### Issue 3: "User not found" error
- The email must be registered in Firebase first
- Try registering the email first, then use forgot password

### Issue 4: Rate limiting
- Firebase has rate limits on password reset emails
- Wait a few minutes between requests
- Don't request multiple resets in quick succession

## Step 6: Test Password Reset

1. Make sure you have a registered account
2. Go to Forgot Password page
3. Enter your registered email
4. Check your email inbox (and spam folder)
5. Click the reset link in the email
6. Set a new password

## Alternative: Custom Email Service

If Firebase emails are not working, you can:
1. Upgrade to Firebase Blaze plan (paid)
2. Configure a custom SMTP server
3. Use a third-party email service (SendGrid, Mailgun, etc.)

## Need Help?

- Firebase Documentation: [Password Reset](https://firebase.google.com/docs/auth/web/manage-users#send_a_password_reset_email)
- Check Firebase Console for email sending logs
- Verify your Firebase project billing status


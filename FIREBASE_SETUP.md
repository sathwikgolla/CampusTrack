# Firebase Authentication Setup Guide

## Error: auth/configuration-not-found

This error occurs when **Email/Password authentication is not enabled** in your Firebase Console.

## How to Fix:

### Step 1: Go to Firebase Console
1. Visit [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **campus-tracker-38f29**

### Step 2: Enable Email/Password Authentication
1. In the left sidebar, click on **"Authentication"** (or **"Build" > "Authentication"**)
2. Click on the **"Sign-in method"** tab (or **"Get started"** if you haven't set up Authentication yet)
3. You'll see a list of sign-in providers
4. Find **"Email/Password"** in the list
5. Click on **"Email/Password"**
6. Toggle the **"Enable"** switch to **ON**
7. Click **"Save"**

### Step 3: Verify Setup
- The Email/Password provider should now show as **"Enabled"** with a green checkmark
- You can optionally enable "Email link (passwordless sign-in)" if needed, but it's not required

### Step 4: Test Your Application
1. Refresh your application
2. Try registering a new account
3. Try logging in with your registered email

## Additional Notes:

- **No email verification required**: By default, Firebase doesn't require email verification for Email/Password authentication
- **Authorized domains**: Make sure your domain (localhost for development) is authorized in Firebase Console under Authentication > Settings > Authorized domains
- **Project ID**: Your project ID is `campus-tracker-38f29`

## Troubleshooting:

If you still see errors after enabling Email/Password:
1. Wait a few seconds for the changes to propagate
2. Clear your browser cache
3. Check the browser console (F12) for any additional error messages
4. Verify that your Firebase project is active and not suspended

## Need Help?

Check the Firebase documentation: [Enable Email/Password Authentication](https://firebase.google.com/docs/auth/web/password-auth)


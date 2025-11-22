# How to Register an Email in Firebase

## Quick Answer

To register an email in Firebase, you need to **create an account** using one of the registration pages in the app.

## Registration Methods

### Method 1: Simple Signup (Recommended)
1. Go to **http://localhost:5173/signup** (or click "Register Now" from Home page)
2. Enter your email (must be from allowed domains: `@campus.edu`, `@university.edu`, or `@college.edu`)
3. Enter a password (minimum 8 characters)
4. Click **"Sign up"**
5. ✅ Your email is now registered in Firebase!

### Method 2: Full Student Registration
1. Go to **http://localhost:5173/register** (or click "Register Now" in "For Students" card)
2. Fill in all details:
   - Roll Number
   - Name
   - Email (must be from allowed domains)
   - Phone (10 digits)
   - Course
   - Password (minimum 8 characters)
3. Click **"Register"**
4. ✅ Your email is now registered in Firebase!

### Method 3: Teacher Registration
1. Go to **http://localhost:5173/teacher/register** (or click "Register Now" in "For Teachers" card)
2. Fill in all details:
   - Name
   - Employee ID
   - Email (must be from allowed domains)
   - Phone (10 digits)
   - Department
   - Password (minimum 8 characters)
3. Click **"Register"**
4. ✅ Your email is now registered in Firebase!

## Important Notes

### Allowed Email Domains
Currently, you can only register with emails from:
- `@campus.edu`
- `@university.edu`
- `@college.edu`

**To allow Gmail or other emails:**
Edit `src/data/allowedEmails.js` and add:
```javascript
return [
  '@campus.edu',
  '@university.edu',
  '@college.edu',
  '@gmail.com',  // Add this to allow Gmail
];
```

### After Registration
Once registered, you can:
- ✅ Login with your email and password
- ✅ Use "Forgot Password" to reset your password
- ✅ Access all features of the app

## Troubleshooting

### "Email not found" when using Forgot Password
- **Solution**: Make sure you registered the email first using one of the registration methods above

### "This email does not have access to register"
- **Solution**: Your email domain is not in the allowed list
- **Fix**: Add your email domain to `src/data/allowedEmails.js` or use an email from allowed domains

### "Email already registered"
- **Solution**: The email is already in Firebase
- **Fix**: Just log in instead of registering again

## Summary

**To register an email in Firebase:**
1. Use any registration page (`/signup`, `/register`, or `/teacher/register`)
2. Enter an email from allowed domains
3. Enter a password (8+ characters)
4. Complete registration
5. ✅ Email is now in Firebase and can use "Forgot Password"


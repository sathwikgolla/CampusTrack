import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Your real Firebase config (already safe to use in frontend)
const firebaseConfig = {
  apiKey: "AIzaSyBQHb4sO9-mozM1d4-N_4RaufW01EJVLEY",
  authDomain: "campus-tracker-38f29.firebaseapp.com",
  projectId: "campus-tracker-38f29",
  storageBucket: "campus-tracker-38f29.firebasestorage.app",
  messagingSenderId: "669283557486",
  appId: "1:669283557486:web:74209751b815a6e5dc067f",
  measurementId: "G-TBT286RXHR"
};

// Initialize Firebase App
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error('Firebase initialization error:', error);
  throw new Error('Failed to initialize Firebase. Please check your configuration.');
}

// Get Authentication instance
let auth;
try {
  auth = getAuth(app);
} catch (error) {
  console.error('Firebase Auth initialization error:', error);
  throw new Error('Failed to initialize Firebase Authentication. Please ensure Email/Password authentication is enabled in Firebase Console.');
}

export { auth };
export default app;

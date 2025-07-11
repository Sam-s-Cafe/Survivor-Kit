
import { initializeApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";

// --- ACTION REQUIRED ---
// 1. Create a new Firebase project at https://console.firebase.google.com/
// 2. Go to Project Settings > General tab.
// 3. Under "Your apps", click the web icon (</>) to create a new web app.
// 4. Register the app and copy the firebaseConfig object here.

const firebaseConfig = {
  apiKey: "AIzaSyDdkdqC-SgTG0qqf5BceGXcBVuNjBMY9Pw",
  authDomain: "om-108.firebaseapp.com",
  projectId: "om-108",
  storageBucket: "om-108.firebasestorage.app",
  messagingSenderId: "198289930612",
  appId: "1:198289930612:web:7329343d992ac988d41421",
  measurementId: "G-C2T057F98Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// --- IMPORTANT SECURITY RULE ---
// In your Firebase console, go to Firestore Database > Rules and set the following rule
// to secure your database collections.
/*
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allows any authenticated user to read/write messages, but not delete.
    match /messages/{document=**} {
      allow read, create: if request.auth != null;
      allow update, delete: if false;
    }
    // Allows any authenticated user to read/write bunkers, but not delete.
    match /bunkers/{document=**} {
      allow read, create: if request.auth != null;
      allow update, delete: if false;
    }
  }
}
*/


// Initialize Firebase
let app: FirebaseApp | null = null;
let db: Firestore | null = null;

// Only initialize Firebase if the config is not using placeholder values.
if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY" && firebaseConfig.projectId !== "YOUR_PROJECT_ID") {
  try {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } catch (e) {
    console.error("Firebase initialization failed:", e);
  }
} else {
    console.warn("Firebase configuration is missing or contains placeholder values. Real-time features will be disabled.");
}

export { db };

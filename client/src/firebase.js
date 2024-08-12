// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c1193.firebaseapp.com",
  projectId: "mern-auth-c1193",
  storageBucket: "mern-auth-c1193.appspot.com",
  messagingSenderId: "248306986571",
  appId: "1:248306986571:web:211ebcbc5b8776e8c867ce",
  measurementId: "G-LXZY1YQWLD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

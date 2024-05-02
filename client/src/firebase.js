// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f46a6.firebaseapp.com",
  projectId: "mern-blog-f46a6",
  storageBucket: "mern-blog-f46a6.appspot.com",
  messagingSenderId: "439108021391",
  appId: "1:439108021391:web:e655dbba9350c6c3cad4fa",
  // authDomain: "mern-blog-f46a6.firebaseapp.com",

  // cookieStorageKey: 'SameSite=None'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app);

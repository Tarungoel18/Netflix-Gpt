// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDz517fU7bmn11Yyxo_l0kw06MVpanO7yw",
  authDomain: "netflixgpt-42f3a.firebaseapp.com",
  projectId: "netflixgpt-42f3a",
  storageBucket: "netflixgpt-42f3a.firebasestorage.app",
  messagingSenderId: "787698723441",
  appId: "1:787698723441:web:751dd5d62d00518a8109d0",
  measurementId: "G-PP25N85H4P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

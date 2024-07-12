// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz4WSyPaLRve-y-TMYm1BzPY-CdZk_CnQ",
  authDomain: "mynotes-9551b.firebaseapp.com",
  projectId: "mynotes-9551b",
  storageBucket: "mynotes-9551b.appspot.com",
  messagingSenderId: "969352020508",
  appId: "1:969352020508:web:6af1cabb958350d769d5d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

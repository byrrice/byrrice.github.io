// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyCrjQTwYPgLoCPtfy5BYh9dTduCbGS9d1I",
  authDomain: "fir-test-5abe9.firebaseapp.com",
  projectId: "fir-test-5abe9",
  storageBucket: "fir-test-5abe9.appspot.com",
  messagingSenderId: "929295855194",
  appId: "1:929295855194:web:cbdfc5277a8f9a1a66b263",
  measurementId: "G-NZCNXHFKJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

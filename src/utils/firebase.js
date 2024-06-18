// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8SZPkpsD4zKdGPiho1j2Lp-irOFpson0",
  authDomain: "netflixgpt-bc20a.firebaseapp.com",
  projectId: "netflixgpt-bc20a",
  storageBucket: "netflixgpt-bc20a.appspot.com",
  messagingSenderId: "921637340221",
  appId: "1:921637340221:web:88072dc808d442fa76d654",
  measurementId: "G-CD5H0WTPMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();
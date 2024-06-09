// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBowZrtkoDHG9VSsiMsO6xJMoWl5zmP-wA",
  authDomain: "jobhut-dabb6.firebaseapp.com",
  projectId: "jobhut-dabb6",
  storageBucket: "jobhut-dabb6.appspot.com",
  messagingSenderId: "842111651435",
  appId: "1:842111651435:web:7792b975d2e8c0cdacab2e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

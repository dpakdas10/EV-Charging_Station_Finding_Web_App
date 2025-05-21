import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCJIDl_wLopsg4uYHIx8TrfPtwQjqtRMKE",
    authDomain: "evcharge-6d471.firebaseapp.com",
    projectId: "evcharge-6d471",
    storageBucket: "evcharge-6d471.firebasestorage.app",
    messagingSenderId: "256503573004",
    appId: "1:256503573004:web:e7bd92ff22968964d8dc29",
    measurementId: "G-LY62TYYZVS"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }; 
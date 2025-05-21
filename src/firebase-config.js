import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getFunctions, httpsCallable } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyCJIDl_wLopsg4uYHIx8TrfPtwQjqtRMKE",
  authDomain: "evcharge-6d471.firebaseapp.com",
  projectId: "evcharge-6d471",
  storageBucket: "evcharge-6d471.firebasestorage.app",
  messagingSenderId: "256503573004",
  appId: "1:256503573004:web:e7bd92ff22968964d8dc29",
  measurementId: "G-LY62TYYZVS"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const functions = getFunctions(app);

// Function to set admin privileges
export const setAdminPrivileges = async (email) => {
  try {
    const setAdminRole = httpsCallable(functions, 'setAdminRole');
    const result = await setAdminRole({ email });
    return result.data;
  } catch (error) {
    console.error('Error setting admin privileges:', error);
    throw error;
  }
};

// Function to check if user is admin
export const isAdmin = async (user) => {
  try {
    const userToken = await user.getIdTokenResult();
    return userToken.claims.admin === true;
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};

export { db, auth, functions };

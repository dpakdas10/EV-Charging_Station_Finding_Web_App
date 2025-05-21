import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

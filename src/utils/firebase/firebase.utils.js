// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithGooglePopup,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAC9IzNYFL5-LQi1p8U504Ao6vewZX6r8k",
  authDomain: "crown-clothing-eshop.firebaseapp.com",
  projectId: "crown-clothing-eshop",
  storageBucket: "crown-clothing-eshop.appspot.com",
  messagingSenderId: "82806236453",
  appId: "1:82806236453:web:04b9de83ba6ea75b18a6cc",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select-account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth);

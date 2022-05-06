// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

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
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async(userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid) //pouze reference na misto v databazi
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef) //tady uz se ptame na skutecna data v referenci
    console.log(userSnapShot);
    console.log(userSnapShot.exists()); //vyhodi false, pokud nemame v databazi zaznam

    if (!userSnapShot.exists()) { //pokud user existuje, podminka bude !true, tedy false a nic se zakladat nebude
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt })
        } catch (error) {
            console.log("error creating the user", error.message)

        }
    }
    return userDocRef;
}
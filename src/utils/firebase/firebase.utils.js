// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from "firebase/firestore"

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
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    promt: "select-account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async(collectionKey, objetsToAdd) => {
    const collectionRef = (db, collectionKey);
}

export const createUserDocumentFromAuth = async(userAuth, additionalInformation = {}) => { //viz video Sign Up with email and password, 6.min 
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid) //pouze reference na misto v databazi
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef) //tady uz se ptame na skutecna data v referenci
    console.log(userSnapShot);
    console.log(userSnapShot.exists()); //vyhodi false, pokud nemame v databazi zaznam

    if (!userSnapShot.exists()) { //pokud user existuje, podminka bude !true, tedy false a nic se zakladat nebude
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation })
        } catch (error) {
            console.log("error creating the user", error.message)

        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async(email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async() => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)
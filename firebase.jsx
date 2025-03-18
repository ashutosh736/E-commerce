// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAlev_xr6TUJUdW3hDGpGUfSSzp1SMhL4o",
  authDomain: "shopingmall-e08dc.firebaseapp.com",
  projectId: "shopingmall-e08dc",
  storageBucket: "shopingmall-e08dc.firebasestorage.app",
  messagingSenderId: "522839838783",
  appId: "1:522839838783:web:e51a2a5ceb39744d10688a",
  measurementId: "G-R1014L171P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// store the Data

const auth=getAuth()


//signup function

export function signup (email,password){
    return createUserWithEmailAndPassword(auth,email,password)
}

// signin function

export function signin (email,password){
    return signInWithEmailAndPassword(auth,email,password)
}
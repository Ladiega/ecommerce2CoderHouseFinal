import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcG62fUJwL6hPfnDI4YlSYXY4LEclluP0",
  authDomain: "fb-ecomerce.firebaseapp.com",
  projectId: "fb-ecomerce",
  storageBucket: "fb-ecomerce.appspot.com",
  messagingSenderId: "516305527812",
  appId: "1:516305527812:web:38c6ce4a4e3df6e82cc151"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
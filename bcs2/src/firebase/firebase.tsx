// Import the functions you need from the SDKs you need
// import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
// import firebase from 'firebase';
// import 'firebase/firestore';
// import 'firebase/auth';
require('firebase/compat/auth');
// const firebase = require("firebase/compat/app");
// Required for side-effects
// require("firebase/firestore");



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDVhf6AaC81r39vNvevABJq1IOOAqt2C34",
  authDomain: "bcs-simulator.firebaseapp.com",
  projectId: "bcs-simulator",
  storageBucket: "bcs-simulator.appspot.com",
  messagingSenderId: "962086677310",
  appId: "1:962086677310:web:7b250a3bc99563c1a9da6f",
  measurementId: "G-B2YPQZ59F8"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default auth;

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// type FireConfig = {
//     [key: string]: string;
//   };

// export const config: FireConfig = {
//     apiKey: "AIzaSyDNbdVmZVmzNzEWw_eqHT6jMLeAa788Rgk",
//     authDomain: "eazzy-todo.firebaseapp.com",
//     projectId: "eazzy-todo",
//     storageBucket: "eazzy-todo.appspot.com",
//     messagingSenderId: "461379999354",
//     appId: "1:461379999354:web:0b5aad7eaa090b4fb34dc3",
//     measurementId: "G-8M0LZN0HLX"
//     };

// !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();    

// export const auth = getAuth();
// export const firestore = firebase.firestore();  

// let instance: any;

// export default function getFirebase() {
//   if (typeof window !== "undefined") {
//     if (instance) return instance;
//     if (!firebase.apps.length) {
//         instance = firebase.initializeApp(firebaseConfig);
//      }else {
//         instance = firebase.app(); 
//      }
//     return instance;
//   }

//   return null;
// }
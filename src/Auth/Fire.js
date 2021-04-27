// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyDtOxsy-KW4xlbuFEhcVma8_iynsGaM2nk",
  authDomain: "bibliotheca-8896.firebaseapp.com",
  projectId: "bibliotheca-8896",
  storageBucket: "bibliotheca-8896.appspot.com",
  messagingSenderId: "17150075676",
  appId: "1:17150075676:web:1acf193976e44c0d6810d9",
  measurementId: "G-M0W04WL0JS",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
export const db = firebase.firestore();
export const auth = firebase.auth();
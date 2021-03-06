import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDW2Tgc9h1DGczMxeqmwGPXX7mTzdbsCDg",
  authDomain: "react-magazine-af40c.firebaseapp.com",
  projectId: "react-magazine-af40c",
  storageBucket: "react-magazine-af40c.appspot.com",
  messagingSenderId: "110847982674",
  appId: "1:110847982674:web:d9c1f122521233402e738b",
  measurementId: "G-61ZX6V197L",
};

firebase.initializeApp(firebaseConfig);

const apiKey = firebaseConfig.apiKey;

const auth = firebase.auth();
const firestore = firebase.firestore();
const storage = firebase.storage();

export { auth, apiKey, firestore, storage };

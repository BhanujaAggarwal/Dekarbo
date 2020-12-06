import firebase from "firebase/app";
import "firebase/functions";
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyB6zJbHXFB7FL_8HFXcgfzy796DQfVIATk",
  authDomain: "purify-289711.firebaseapp.com",
  databaseURL: "https://purify-289711.firebaseio.com",
  projectId: "purify-289711",
  storageBucket: "purify-289711.appspot.com",
  messagingSenderId: "677886852651",
  appId: "1:677886852651:web:0788b67cf7d24131eeb46e"
};

firebase.initializeApp(config);
// var db = config.firestore();
export const app = firebase.app();
export const functions = firebase.functions();
export const db = firebase.firestore();
// export { db };

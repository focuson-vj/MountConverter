import ENV from "./env.json";
import firebase from "firebase/app";

require("firebase/firestore");

const firebaseConfig = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
  appID: ENV.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY || "whatever",
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN || "whatever",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE || "whatever",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "whatever",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "whatever",
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID || "whatever",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "whatever",
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID || "whatever",
};

class Api {
  auth: firebase.auth.Auth;
  db: firebase.firestore.Firestore;
  storage: firebase.storage.Storage;
  googleAuthProvider: firebase.auth.GoogleAuthProvider;
  persistence: typeof firebase.auth.Auth.Persistence;

  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().useDeviceLanguage();

    this.auth = firebase.auth();
    this.db = firebase.firestore();
    this.storage = firebase.storage();

    this.persistence = firebase.auth.Auth.Persistence;
    this.googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  }
}

export default new Api();

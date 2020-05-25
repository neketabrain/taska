import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
  googleAuthProvider: firebase.auth.GoogleAuthProvider;

  constructor() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().useDeviceLanguage();

    this.auth = firebase.auth();
    this.db = firebase.firestore();

    this.googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  }

  createUserWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  signInWithGoogle(): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithPopup(this.googleAuthProvider);
  }

  signInWithEmailAndPassword(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signOut(): Promise<void> {
    return this.auth.signOut();
  }
}

export default new Api();

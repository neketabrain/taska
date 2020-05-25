import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
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

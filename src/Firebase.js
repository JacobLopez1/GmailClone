import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCsxYjH6BLND7cY-FJ9lt2BLqoque2oBSQ",
    authDomain: "clone-e6e0a.firebaseapp.com",
    projectId: "clone-e6e0a",
    storageBucket: "clone-e6e0a.appspot.com",
    messagingSenderId: "1063646132080",
    appId: "1:1063646132080:web:5afaae417956c5010c81b5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }
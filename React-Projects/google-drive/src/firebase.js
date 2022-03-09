import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDlKllBfvbENk-s0vLbe37mS8f4MjEIF64",
  authDomain: "drive-clone-dd74c.firebaseapp.com",
  projectId: "drive-clone-dd74c",
  storageBucket: "drive-clone-dd74c.appspot.com",
  messagingSenderId: "318135146258",
  appId: "1:318135146258:web:075a9b49641cfc862185cb"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const storagee = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, storagee, provider}
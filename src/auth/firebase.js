// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAUJVxhD4jsnbodeK1LmDl2isCErFs8hY0",
  authDomain: "clone-9a496.firebaseapp.com",
  projectId: "clone-9a496",
  storageBucket: "clone-9a496.appspot.com",
  messagingSenderId: "660593720291",
  appId: "1:660593720291:web:c13293f1aa508b5f8abed6",
  measurementId: "G-6K37FGFNE7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

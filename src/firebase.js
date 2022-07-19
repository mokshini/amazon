
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/storage";



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCG3YC2teS49UpVY4IUJm5VQAACFirQJ3w",
  authDomain: "new-730bf.firebaseapp.com",
  projectId: "new-730bf",
  storageBucket: "new-730bf.appspot.com",
  messagingSenderId: "871636336296",
  appId: "1:871636336296:web:9a6d0237891023d623cc9d",
  measurementId: "G-7CLC894H4P"
};







const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

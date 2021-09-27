import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB9YlPAnxdrCiE8FeqqsbreULIhWGyDveQ",
  authDomain: "portfolio-app-21bb5.firebaseapp.com",
  projectId: "portfolio-app-21bb5",
  storageBucket: "portfolio-app-21bb5.appspot.com",
  messagingSenderId: "358983366756",
  appId: "1:358983366756:web:27e664a03f1a094b2a4771",
  measurementId: "G-9TW090KG5B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;

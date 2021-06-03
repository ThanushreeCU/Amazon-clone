import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyACNbOYxy94ly7UObU_SJQJuqUOeAvaP-s",
  authDomain: "clone-5c343.firebaseapp.com",
  projectId: "clone-5c343",
  storageBucket: "clone-5c343.appspot.com",
  messagingSenderId: "122346308077",
  appId: "1:122346308077:web:d806a32fd8148ffd96a7e4",
  measurementId: "G-4XM1HHERVQ"
});

const auth = firebase.auth();

export { auth };
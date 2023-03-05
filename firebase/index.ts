// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAjnSxmbji_Eig57IMEQ3Vyaq172GdZaU",
  authDomain: "tttn-8ae05.firebaseapp.com",
  projectId: "tttn-8ae05",
  storageBucket: "tttn-8ae05.appspot.com",
  messagingSenderId: "59283673312",
  appId: "1:59283673312:web:027e0feb671b360d5e4085",
  measurementId: "G-C2EYHRJ9KH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
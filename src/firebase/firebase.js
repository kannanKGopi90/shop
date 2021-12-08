// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjh90AsOOHeHomgUd0ejVBot8BrDf6bFI",
  authDomain: "test-9be63.firebaseapp.com",
  projectId: "test-9be63",
  storageBucket: "test-9be63.appspot.com",
  messagingSenderId: "987704260341",
  appId: "1:987704260341:web:4a6984f413fbb4c0d937bc"
};

// Initialize Firebase
const adminApp = initializeApp(firebaseConfig);
let db = getFirestore(adminApp);
export default db;
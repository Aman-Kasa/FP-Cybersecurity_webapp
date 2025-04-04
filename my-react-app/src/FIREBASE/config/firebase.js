import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAoqN69GH6qmlFn27_-b0C89iOFzk9I5ns",
  authDomain: "cybershield-c26c8.firebaseapp.com",
  projectId: "cybershield-c26c8",
  storageBucket: "cybershield-c26c8.firebasestorage.app",
  messagingSenderId: "651269861165",
  appId: "1:651269861165:web:b2db2fdb195e2c1bf86da4",
  measurementId: "G-ZR8LLBP5PQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);  
export const auth = getAuth(app);
export const GoogleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
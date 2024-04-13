

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXx2Ey3kSyzUZ5gabgEKqsisQJcUVTarE",
  authDomain: "gpt2-c9c3c.firebaseapp.com",
  projectId: "gpt2-c9c3c",
  storageBucket: "gpt2-c9c3c.appspot.com",
  messagingSenderId: "524227817774",
  appId: "1:524227817774:web:f80728591f6974dfe60abf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
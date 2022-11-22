// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnLvdIL8jVl0Pu3eypKr_9oif-cYhOLFc",
  authDomain: "chatapp-79ffd.firebaseapp.com",
  projectId: "chatapp-79ffd",
  storageBucket: "chatapp-79ffd.appspot.com",
  messagingSenderId: "743458135132",
  appId: "1:743458135132:web:4fa53388574184ea049a99",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
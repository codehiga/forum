import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAa89W0dwe7R8xZFpxsp63frhBeBBYU4R4",
  authDomain: "forumapp-22ec4.firebaseapp.com",
  projectId: "forumapp-22ec4",
  storageBucket: "forumapp-22ec4.appspot.com",
  messagingSenderId: "52829905126",
  appId: "1:52829905126:web:707b7650364df952839b27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkS7LhoT3bwI8kM8uiUfAfC8fcvgz049w",
  authDomain: "chatapplication-with-cha-13325.firebaseapp.com",
  projectId: "chatapplication-with-cha-13325",
  storageBucket: "chatapplication-with-cha-13325.appspot.com",
  messagingSenderId: "74612287607",
  appId: "1:74612287607:web:562499c2733a8cba403e72"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
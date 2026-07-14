import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBfDE62-FRuPqbD5f3y-8xqZe01STr1VRk",
  authDomain: "bharat-bulletin-d09a7.firebaseapp.com",
  projectId: "bharat-bulletin-d09a7",
  storageBucket: "bharat-bulletin-d09a7.firebasestorage.app",
  messagingSenderId: "294822914941",
  appId: "1:294822914941:web:a6f4cb13f7b9a841effa14",
};

const app = !getApps().length
  ? initializeApp(firebaseConfig)
  : getApp();

export const db = getFirestore(app);
export const auth = getAuth(app);
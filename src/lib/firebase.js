import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "chat-app-58839.firebaseapp.com",
  projectId: "chat-app-58839",
  storageBucket: "chat-app-58839.appspot.com",
  messagingSenderId: "311668634932",
  appId: "1:311668634932:web:ca9a9b75e2287536092161",
  measurementId: "G-JD0F6G9HBH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()
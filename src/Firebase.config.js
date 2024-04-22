import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCqivxddy_pdwxvJZwLJZb34mRnPxkJyKc",
  authDomain: "pharmacyhub-5f109.firebaseapp.com",
  projectId: "pharmacyhub-5f109",
  storageBucket: "pharmacyhub-5f109.appspot.com",
  messagingSenderId: "523928312459",
  appId: "1:523928312459:web:a22cf83cb906a4ed0d528e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAGhY8q93iGfOyprKT3yW3EBLLn426JPHQ",
    authDomain: "wastabin-92613.firebaseapp.com",
    databaseURL: "https://wastabin-92613-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wastabin-92613",
    storageBucket: "wastabin-92613.firebasestorage.app",
    messagingSenderId: "108433485225",
    appId: "1:108433485225:web:c56dee2b1eb14b326be8b8",
    measurementId: "G-6L7DL1GF2V"
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);

const database = getDatabase(app);

export { database };

export default app;
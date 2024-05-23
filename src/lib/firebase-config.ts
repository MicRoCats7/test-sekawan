// firebase-config.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNDQX9QIPJNn-ZGVY0FApKAoNCSSTGsfI",
    authDomain: "frontend-test-sekawan.firebaseapp.com",
    projectId: "frontend-test-sekawan",
    storageBucket: "frontend-test-sekawan.appspot.com",
    messagingSenderId: "962247605775",
    appId: "1:962247605775:web:c1c3fdebb0b68b7808ad7a",
    measurementId: "G-R1L6MQXTGK"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


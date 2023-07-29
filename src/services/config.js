import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "tp-final-80ed7.firebaseapp.com",
  projectId: "tp-final-80ed7",
  storageBucket: "tp-final-80ed7.appspot.com",
  messagingSenderId: "1063213143004",
  appId: "1:1063213143004:web:02b43bfa43e0718994f519"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);





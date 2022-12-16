import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAXB0zlMSy-u0hqFTE2hOwxjnM6bu3t3fE",
  authDomain: "ecommerce34820.firebaseapp.com",
  projectId: "ecommerce34820",
  storageBucket: "ecommerce34820.appspot.com",
  messagingSenderId: "298321127678",
  appId: "1:298321127678:web:33ee27c42351a40e6e5daf"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
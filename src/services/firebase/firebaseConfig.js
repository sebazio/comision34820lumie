import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAab_VDig4wc7Gt1ha2PN8PL__yrqvD7cU",
  authDomain: "notes34820.firebaseapp.com",
  projectId: "notes34820",
  storageBucket: "notes34820.appspot.com",
  messagingSenderId: "1092749598713",
  appId: "1:1092749598713:web:48bcde4a017ef0adaca728"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
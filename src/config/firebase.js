
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCgjV3P_YAfhdcHAXh4lsq5UBM5rSB1rh4",
  authDomain: "fir-findit.firebaseapp.com",
  projectId: "fir-findit",
  storageBucket: "fir-findit.appspot.com",
  messagingSenderId: "978039635759",
  appId: "1:978039635759:web:93830f153dec6ce7086bda"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
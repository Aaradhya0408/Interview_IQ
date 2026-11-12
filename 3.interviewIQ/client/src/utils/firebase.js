
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "smart-hire-586a2.firebaseapp.com",
  projectId: "smart-hire-586a2",
  storageBucket: "smart-hire-586a2.firebasestorage.app",
  messagingSenderId: "240216240677",
  appId: "1:240216240677:web:dcca944884b5bf13ff05cc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
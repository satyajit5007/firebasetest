import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCnDGVSsFBCgfIKsrQEdkbVyR8aAvWqt1c",
  authDomain: "fir-auth-57-6322c.firebaseapp.com",
  projectId: "fir-auth-57-6322c",
  storageBucket: "fir-auth-57-6322c.appspot.com",
  messagingSenderId: "141840841604",
  appId: "1:141840841604:web:b73f77ccaa670339b87bd1",
  measurementId: "G-3G6TM1HDYP"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };



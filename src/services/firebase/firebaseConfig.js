import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBRILFveOgEJXvoPvfxrLVydVf0X4j_5TE",
  authDomain: "backend54045a.firebaseapp.com",
  projectId: "backend54045a",
  storageBucket: "backend54045a.appspot.com",
  messagingSenderId: "673740419639",
  appId: "1:673740419639:web:1d28c23b8f1a3b62fcc5b2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
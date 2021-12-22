// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Initialize Firebase
const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// apiKey: "AIzaSyC0sFxTli2eQpwPMDiuoohKhNi8eXzRZEg",
//   authDomain: "favydev-93dc3.firebaseapp.com",
//   databaseURL: "https://favydev-93dc3-default-rtdb.firebaseio.com",
//   projectId: "favydev-93dc3",
//   storageBucket: "favydev-93dc3.appspot.com",
//   messagingSenderId: "422419216535",
//   appId: "1:422419216535:web:2576056fe03f89104c51d2"

const firebaseApp = initializeApp(clientCredentials);
const auth = getAuth(firebaseApp);

const db = getFirestore();

export { firebaseApp, auth, db };

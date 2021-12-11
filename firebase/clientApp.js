// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const clientCredentials = {
  apiKey: "AIzaSyC0sFxTli2eQpwPMDiuoohKhNi8eXzRZEg",
  authDomain: "favydev-93dc3.firebaseapp.com",
  projectId: "favydev-93dc3",
  storageBucket: "favydev-93dc3.appspot.com",
  messagingSenderId: "422419216535",
  appId: "1:422419216535:web:2576056fe03f89104c51d2",
};
// Initialize Firebase

// if (!getApps().length) {
// }
const firebase = initializeApp(clientCredentials);
const db = getFirestore(firebase);
const auth = getAuth(firebase);



export { firebase , db , auth };

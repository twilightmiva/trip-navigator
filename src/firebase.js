import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBsuq3nhEyTDyTUM61L8A3hT306N_ZZr5c",
  authDomain: "trip-navigator-cbf95.firebaseapp.com",
  projectId: "trip-navigator-cbf95",
  storageBucket: "trip-navigator-cbf95.appspot.com",
  messagingSenderId: "681078402214",
  appId: "1:681078402214:web:d376ca64c2244158b2d867",
  measurementId: "G-7QTEGJL4VQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

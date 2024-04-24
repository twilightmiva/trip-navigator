



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBjFcEVw7vpKRwvb6-1BJw2vkO123VXyEc",
  authDomain: "eternity-design.firebaseapp.com",
  projectId: "eternity-design",
  storageBucket: "eternity-design.appspot.com",
  messagingSenderId: "815754054879",
  appId: "1:815754054879:web:2ac6b53a6618878e672d6a",
  measurementId: "G-96BJC8J958",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
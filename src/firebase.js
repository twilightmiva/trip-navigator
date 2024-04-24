// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAL-Cd2rlVnxSzTccrainuHP5KB-LCvAGI",
//   authDomain: "trip-navigator-cf6c0.firebaseapp.com",
//   projectId: "trip-navigator-cf6c0",
//   storageBucket: "trip-navigator-cf6c0.appspot.com",
//   messagingSenderId: "153437046801",
//   appId: "1:153437046801:web:ca24f8d74fd91f7a25c9b0",
//   measurementId: "G-KBRZR7P7GF"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
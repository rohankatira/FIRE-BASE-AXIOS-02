// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7dKfa4UbYoKT6eFO1C3E5JtHl2yl5h34",
  authDomain: "fire-base-axios-02.firebaseapp.com",
  projectId: "fire-base-axios-02",
  storageBucket: "fire-base-axios-02.firebasestorage.app",
  messagingSenderId: "872070929710",
  appId: "1:872070929710:web:551ecc9dc5c9930ddc2ebf",
  databaseURL: "https://fire-base-axios-02-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const databaseURL = firebaseConfig.databaseURL;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFbrv-651lhAlyLv3q4Xb3cpuv9tRayHI",
  authDomain: "the-read-along-blog.firebaseapp.com",
  projectId: "the-read-along-blog",
  storageBucket: "the-read-along-blog.appspot.com",
  messagingSenderId: "231237862773",
  appId: "1:231237862773:web:4215971bfe19ed92f67f3c",
  measurementId: "G-QCK1J7WKYL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
const analytics = getAnalytics(app);

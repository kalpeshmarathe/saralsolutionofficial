// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-NMtShBjWfdoWNcB-6km-yNJpMum_n1I",
  authDomain: "saralsolutions-725a5.firebaseapp.com",
  projectId: "saralsolutions-725a5",
  storageBucket: "saralsolutions-725a5.firebasestorage.app",
  messagingSenderId: "516087087728",
  appId: "1:516087087728:web:876e116547ea35178aaab5",
  measurementId: "G-37RXC8NXXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { app, analytics };

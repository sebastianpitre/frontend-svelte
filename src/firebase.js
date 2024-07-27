import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDbu6feA8hvAWOIUJG86IA7PwMlQ6alJAc",
    authDomain: "vitrinaweb-51caa.firebaseapp.com",
    projectId: "vitrinaweb-51caa",
    storageBucket: "vitrinaweb-51caa.appspot.com",
    messagingSenderId: "415423271807",
    appId: "1:415423271807:web:f6886a1afe97f31d39404a",
    measurementId: "G-C9X1MB8PDF"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
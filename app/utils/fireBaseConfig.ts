// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAM2Iz4HYKaqn92Oe1zBRTKAgLA5TfxeE",
  authDomain: "netflix-gpt-965d1.firebaseapp.com",
  projectId: "netflix-gpt-965d1",
  storageBucket: "netflix-gpt-965d1.firebasestorage.app",
  messagingSenderId: "181614411936",
  appId: "1:181614411936:web:479abc0c4d5964bb3bc9c5",
  measurementId: "G-HYH632KG89",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

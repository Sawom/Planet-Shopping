// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1UdCWNZK9X6pC8_UZ1qdsEU6ov0YcaUQ",
  authDomain: "ecommerceapp-f7c88.firebaseapp.com",
  projectId: "ecommerceapp-f7c88",
  storageBucket: "ecommerceapp-f7c88.appspot.com",
  messagingSenderId: "155053083414",
  appId: "1:155053083414:web:7a9ac2861510c4d8e49e37",
  measurementId: "G-ZB89V3N43J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export default auth;
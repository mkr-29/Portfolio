import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtWnNWPWGrfT-4NrJwjaVvVtfgBRVRgcw",
  authDomain: "portfolioform-47039.firebaseapp.com",
  databaseURL: "https://portfolioform-47039-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolioform-47039",
  storageBucket: "portfolioform-47039.appspot.com",
  messagingSenderId: "197979848185",
  appId: "1:197979848185:web:fd2af1859898c30d8cd128",
  measurementId: "G-J7FY7LBJXR"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
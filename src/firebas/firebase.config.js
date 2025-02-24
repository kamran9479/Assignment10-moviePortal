import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB5vUjhjZl-FAoxIgmxbyr-HFUAsCtsdAI",
  authDomain: "movie-portal-b6c4a.firebaseapp.com",
  projectId: "movie-portal-b6c4a",
  storageBucket: "movie-portal-b6c4a.firebasestorage.app",
  messagingSenderId: "500515839770",
  appId: "1:500515839770:web:91d22bd554e02acba116a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


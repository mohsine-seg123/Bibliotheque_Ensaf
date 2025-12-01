// Import Firebase core
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";

// Ton vrai config Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBFPG0_pW0szZ4CGbS1VgZ5xBimpy_tHUk",
  authDomain: "authsite-82c29.firebaseapp.com",
  projectId: "authsite-82c29",
  storageBucket: "authsite-82c29.firebasestorage.app",
  messagingSenderId: "151912344868",
  appId: "1:151912344868:web:61ef265b94e41685ab57b1",
  measurementId: "G-P485Y69BKE"
};

// Initialisation
const app = initializeApp(firebaseConfig);

// Authentification
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// Fonction Login Google
export const loginWithGoogle = () => signInWithPopup(auth, googleProvider);
// export const logout = async () => {
//   await signOut(auth);
// };
export const logout = () => signOut(auth);

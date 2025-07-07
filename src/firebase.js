// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw6mN6uWODI_8jbP1h1MfyvDTBjUD_vLg",
  authDomain: "western-hub-2ae5c.firebaseapp.com",
  projectId: "western-hub-2ae5c",
  storageBucket: "western-hub-2ae5c.firebasestorage.app",
  messagingSenderId: "896398663012",
  appId: "1:896398663012:web:5143160562dbd62164ae71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// 1. Función para iniciar sesión
export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// 2. Función para cerrar sesión
export const logOut = () => {
  return signOut(auth);
};

// 3. Función para escuchar cambios de autenticación
export const onAuthChange = (callback) => {
  return onAuthStateChanged(auth, callback);
};

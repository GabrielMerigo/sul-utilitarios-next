// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA1OJHETcfeK_0w2kXDOCZyJDOLuZz4rLQ',
  authDomain: 'sul-utilitarios.firebaseapp.com',
  projectId: 'sul-utilitarios',
  storageBucket: 'sul-utilitarios.appspot.com',
  messagingSenderId: '143328299951',
  appId: '1:143328299951:web:e70b4ebb1bff7ce0c67d5a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const vehiclesCollection = collection(db, 'Vehicles');

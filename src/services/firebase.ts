import * as firebase from 'firebase/app';
import { getFirestore, collection, getDocs, getDoc, doc } from 'firebase/firestore/lite';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.NEXTPUBLICAPIKEY,
  authDomain: process.env.NEXTPUBLICAUTHDOMAIN,
  projectId: process.env.NEXTPUBLICPROJECTID,
  storageBucket: process.env.NEXTPUBLICSTORAGEBUCKET,
  messagingSenderId: process.env.NEXTPUBLICMESSAGINGSENDERID,
  appId: process.env.NEXTPUBLICAPPID,
  measurementId: process.env.NEXTPUBLICMEASUREMENTID
};

const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, getDoc, doc }
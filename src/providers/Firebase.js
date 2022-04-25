import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD4_AiJFGf1nIvn9BY_rZeoITinzxfkl70",
  authDomain: "chatevius.firebaseapp.com",
  databaseURL: "https://chatevius.firebaseio.com",
  projectId: "chatevius",
  storageBucket: "chatevius.appspot.com",
  messagingSenderId: "114050756597",
  appId: "1:114050756597:web:53eada24e6a5ae43fffabc",
  measurementId: "G-5V3L65YQKP",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export { db };

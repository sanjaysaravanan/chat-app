// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDE40Qw0NHi1xZx5aXkFUIJ1QsvPoaPzpk',
  authDomain: 'slack-reacreation.firebaseapp.com',
  projectId: 'slack-reacreation',
  storageBucket: 'slack-reacreation.appspot.com',
  messagingSenderId: '715202799300',
  appId: '1:715202799300:web:0d5a1ffb1d8ad306e6cb91',
  measurementId: 'G-TGKPYM41Z4',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'

import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAyDDovCzJFwRzuUXpVn8Zs6I_BzxDTvCE',
  authDomain: 'piv-tcc.firebaseapp.com',
  projectId: 'piv-tcc',
  storageBucket: 'piv-tcc.appspot.com',
  messagingSenderId: '98593254837',
  appId: '1:98593254837:web:1d8d13c0389593c821bdfc',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db, app }

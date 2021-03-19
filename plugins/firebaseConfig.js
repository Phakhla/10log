import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: "AIzaSyBYfgnYPfxCRLB8PVdunLPl4H1N9dD9LeU",
  authDomain: "log-5f77a.firebaseapp.com",
  projectId: "log-5f77a",
  storageBucket: "log-5f77a.appspot.com",
  messagingSenderId: "686009532054",
  appId: "1:686009532054:web:eb276ecda83e88fa714cb7"
  };
  firebase.initializeApp(firebaseConfig)
}
export const shopshop = firebase.firestore()
export const auth = firebase.auth()

import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyByQG1Xo3xKKClHI7ufck42QgkAjc-w-bs",
  authDomain: "fun-chat-a3e83.firebaseapp.com",
  projectId: "fun-chat-a3e83",
  storageBucket: "fun-chat-a3e83.appspot.com",
  messagingSenderId: "858771405295",
  appId: "1:858771405295:web:c2c817f0f6eb357cf6de1a",
  measurementId: "G-751NYG5RYN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;

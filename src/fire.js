// fire.js

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyANgPM7O32ebw7-K0R6H7jc47Kq1b-7qos",
  authDomain: "whatsapp-client-1872a.firebaseapp.com",
  projectId: "whatsapp-client-1872a",
  storageBucket: "whatsapp-client-1872a.appspot.com",
  messagingSenderId: "544021224811",
  appId: "1:544021224811:web:2207d33c1517c6d576402e",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;

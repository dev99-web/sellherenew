import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAXPh1aLXuWrUa0su8-xFaMU8vJxDlC3vs",
    authDomain: "login-dff76.firebaseapp.com",
    projectId: "login-dff76",
    storageBucket: "login-dff76.appspot.com",
    messagingSenderId: "11516162647",
    appId: "1:11516162647:web:576b63bf272bb3c77ee912"
  };

  export default firebase.initializeApp(firebaseConfig);
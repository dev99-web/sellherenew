import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAFk9YI0Ps7nMBFb72iQ-jtnUlK6XUVzDY",
  authDomain: "sellhere-25924.firebaseapp.com",
  projectId: "sellhere-25924",
  storageBucket: "sellhere-25924.appspot.com",
  messagingSenderId: "956549717486",
  appId: "1:956549717486:web:98602b38194f42e1b582ff"
};

  export default firebase.initializeApp(firebaseConfig);
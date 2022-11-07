import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBRjy4AfAabCnD7YWm-xr2k6VTXC2yX35U",
    authDomain: "olx-clone-7dba6.firebaseapp.com",
    projectId: "olx-clone-7dba6",
    storageBucket: "olx-clone-7dba6.appspot.com",
    messagingSenderId: "269672664540",
    appId: "1:269672664540:web:53a0d73f16711b44101319",
    measurementId: "G-4QC8CKT510"
  };

  export default firebase.initializeApp(firebaseConfig)
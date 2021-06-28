import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyAXwC-pCBENRVhJo8AqLAJU0cAVkYFSgbI",
    authDomain: "mern-ecommerce-db.firebaseapp.com",
    projectId: "mern-ecommerce-db",
    storageBucket: "mern-ecommerce-db.appspot.com",
    messagingSenderId: "881608719240",
    appId: "1:881608719240:web:962d744c69e36abce9183d",
    measurementId: "G-64118RDYTK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyBImANAWaxPMI2XBJtGt4Yt6Bd2HKAU4Sw",
    authDomain: "list-of-ngo.firebaseapp.com",
    projectId: "list-of-ngo",
    databaseURL: "https://list-of-ngo.firebaseapp.com",
    storageBucket: "list-of-ngo.appspot.com",
    messagingSenderId: "598381149385",
    appId: "1:598381149385:web:6e80f63834eda79e036118"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

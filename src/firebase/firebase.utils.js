import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCKXi7z0pP2tl5j_8JraZ8igPdKKnrtZs0",
  authDomain: "react-developer-crwn-db.firebaseapp.com",
  databaseURL: "https://react-developer-crwn-db.firebaseio.com",
  projectId: "react-developer-crwn-db",
  storageBucket: "",
  messagingSenderId: "785894595622",
  appId: "1:785894595622:web:699ad7b5de0b94b8"
};

// export const createUserProfileDocument = asnyc (userAuth, additionalData) => {
//   if(!userAuth) return;

  
// }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
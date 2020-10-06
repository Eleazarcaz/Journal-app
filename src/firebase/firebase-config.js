import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
}; */

const firebaseConfig = {
  apiKey: 'AIzaSyAe1q1iA1jLKFJg9MlEzdHNFpDotMwXqhE',
  authDomain: 'login-app-44b5d.firebaseapp.com',
  databaseURL: 'https://login-app-44b5d.firebaseio.com',
  projectId: 'login-app-44b5d',
  storageBucket: 'login-app-44b5d.appspot.com',
  messagingSenderId: '67726808912',
  appId: '1:67726808912:web:dc7ac87f61524cd491fe55',
};

// if( process.env.NODE_ENV === 'test' ) {
//     // testing
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
// dev/prod
// firebase.initializeApp(firebaseConfig);
// }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };

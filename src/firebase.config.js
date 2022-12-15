import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// const firebaseConfig = {
//   apiKey: 'AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs',
//   authDomain: 'restaurantapp-c2ed6.firebaseapp.com',
//   databaseURL: 'https://restaurantapp-c2ed6-default-rtdb.firebaseio.com',
//   projectId: 'restaurantapp-c2ed6',
//   storageBucket: 'restaurantapp-c2ed6.appspot.com',
//   messagingSenderId: '174416156605',
//   appId: '1:174416156605:web:2ec169ea4ef3e7bb25e4d4',
// };

const firebaseConfig = {
  apiKey: 'AIzaSyAaUFjmdgf4DCvmcgGZ-gADQQ4V-5SSRGs',

  authDomain: 'restaurantproject-a20ba.firebaseapp.com',

  databaseURL: 'https://restaurantproject-a20ba-default-rtdb.firebaseio.com',

  projectId: 'restaurantproject-a20ba',

  storageBucket: 'restaurantproject-a20ba.appspot.com',

  messagingSenderId: '353732497643',

  appId: '1:353732497643:web:1bf61fe7bfdb79ae52eeae',
};

// Initialize Firebase

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };

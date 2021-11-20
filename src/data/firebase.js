import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCIlAUBkwJ7LXxW333byw31KU60qwdHP6o",
    authDomain: "latiendita-react-coderhouse.firebaseapp.com",
    projectId: "latiendita-react-coderhouse",
    storageBucket: "latiendita-react-coderhouse.appspot.com",
    messagingSenderId: "804257662076",
    appId: "1:804257662076:web:082cab826e63dcaf6ab5f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

//FireBase ayarlarda
const firebaseConfig = {
    apiKey: "AIzaSyBY_7A9MZeGJ_x68JQL3JGX_lVbzDQliWw",
    authDomain: "modern-react-app-af090.firebaseapp.com",
    projectId: "modern-react-app-af090",
    storageBucket: "modern-react-app-af090.appspot.com",
    messagingSenderId: "824161797109",
    appId: "1:824161797109:web:e0231dec66a2cdc44996bc"
};

initializeApp(firebaseConfig);

const db = getFirestore();
export { db };
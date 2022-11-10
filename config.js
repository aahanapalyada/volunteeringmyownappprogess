import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDORwJfM9Dg9DmRBHh2FlBurv4R56tkUjI",
  authDomain: "volunteeringapp-3aff9.firebaseapp.com",
  projectId: "volunteeringapp-3aff9",
  storageBucket: "volunteeringapp-3aff9.appspot.com",
  messagingSenderId: "192492281186",
  appId: "1:192492281186:web:70d7cd2fac77ef74be603b"
};

const db = getFirestore(app)
const app = initializeApp(firebaseConfig);

export default {db, app};
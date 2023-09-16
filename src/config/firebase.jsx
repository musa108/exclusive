
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyA5au0TGmK1iEdGQSQBxZyZkduUW39Bvh0",
  authDomain: "exclusive-8757a.firebaseapp.com",
  projectId: "exclusive-8757a",
  storageBucket: "exclusive-8757a.appspot.com",
  messagingSenderId: "714338500872",
  appId: "1:714338500872:web:c783f822e112d51d492cbd",
  measurementId: "G-Y03GHWGNV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
export  const provider = new GoogleAuthProvider();

export default ({auth,provider});
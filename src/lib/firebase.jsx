import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider, GithubAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-d4a11.firebaseapp.com",
  projectId: "chatapp-d4a11",
  storageBucket: "chatapp-d4a11.appspot.com",
  messagingSenderId: "274487715712",
  appId: "1:274487715712:web:8c1d094f522949f4f60365"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);


export {auth, googleProvider, githubProvider, db, storage};
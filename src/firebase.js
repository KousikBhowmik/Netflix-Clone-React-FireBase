// import { configDotenv } from "dotenv";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// configDotenv();
// const api =process.env.API_KEY

// console.log(api);

// Your web app's Firebase configuration
const fbKey = import.meta.env.VITE_API_FB;
const firebaseConfig = {
  apiKey: fbKey,
  authDomain: "sasta-netflix-4d409.firebaseapp.com",
  projectId: "sasta-netflix-4d409",
  storageBucket: "sasta-netflix-4d409.firebasestorage.app",
  messagingSenderId: "160082213951",
  appId: "1:160082213951:web:c36cbed12a664c70f44c8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signUp = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    alert(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
  }
};

const logIn = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
    
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "))
  }
};

const logOut = async () => {
  signOut(auth);
};

export { auth, db, logIn, signUp, logOut };

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  //add your Firebase project configuration here
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

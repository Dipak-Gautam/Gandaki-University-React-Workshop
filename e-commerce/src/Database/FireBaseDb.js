import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKyOGvY2BTtXggDk6A55Ba2HxOhMd8Gxw",
  authDomain: "realtime-dbtest-b0a45.firebaseapp.com",
  databaseURL:
    "https://realtime-dbtest-b0a45-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "realtime-dbtest-b0a45",
  storageBucket: "realtime-dbtest-b0a45.firebasestorage.app",
  messagingSenderId: "776898179759",
  appId: "1:776898179759:web:a18e0a86b061a5e7d29a5a",
  measurementId: "G-RGMCN3D393",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

import { getDocs, collection, addDoc } from "firebase/firestore";
import { db } from "../../Database/FireBaseDb";

const saveData = async (data, setVisible) => {
  console.log("saveData called with data:", data);
  try {
    const docRef = await addDoc(collection(db, "orders"), data);
    console.log("Document written with ID:", docRef.id);
    setVisible(false);
  } catch (error) {
    console.error("Error adding document:", error);
  }
};
export default saveData;

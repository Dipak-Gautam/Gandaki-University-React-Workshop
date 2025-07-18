import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Database/FireBaseDb";

const getProductApi = async (setProductData) => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProductData(products);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
export default getProductApi;

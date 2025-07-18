const addQuantity = (setCartData, productData) => {
  const localData = JSON.parse(localStorage.getItem("cart5"));
  const index = localData.findIndex((item) => item.id == productData.id);
  localData[index].quantity += 1;
  setCartData(localData);
  localStorage.setItem("cart5", JSON.stringify(localData));
};
export default addQuantity;

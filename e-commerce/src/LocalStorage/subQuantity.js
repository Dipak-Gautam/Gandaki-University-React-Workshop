const subQuantity = (setCartData, productData) => {
  if (productData.quantity <= 1) return;
  const localData = JSON.parse(localStorage.getItem("cart5"));
  const index = localData.findIndex((item) => item.id == productData.id);
  localData[index].quantity -= 1;
  setCartData(localData);
  localStorage.setItem("cart5", JSON.stringify(localData));
};
export default subQuantity;

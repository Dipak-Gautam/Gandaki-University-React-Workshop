const deleteFromCart = (productData, setCardData) => {
  const localData = JSON.parse(localStorage.getItem("cart5"));
  const updateData = localData.filter((item) => item.id != productData.id);
  setCardData(updateData);
  localStorage.setItem("cart5", JSON.stringify(updateData));
};
export default deleteFromCart;

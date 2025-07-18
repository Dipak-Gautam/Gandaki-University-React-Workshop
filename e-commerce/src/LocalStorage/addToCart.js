const addToCart = (data) => {
  data.quantity = 1;

  const localData = localStorage.getItem("cart5");
  console.log("localstorage", localData);
  if (localData == null) {
    let tempArray = [];
    tempArray.push(data);
    localStorage.setItem("cart5", JSON.stringify(tempArray));
  } else {
  }
};
export default addToCart;

import React from "react";
import { MdShoppingCart } from "react-icons/md";
const AddToCart = () => {
  return (
    <div className="flex bg-orange-500 text-white p-2 px-3 items-center font-medium rounded-md text-sm">
      <MdShoppingCart className="text-lg" />
      <span>Add to Cart</span>
    </div>
  );
};

export default AddToCart;

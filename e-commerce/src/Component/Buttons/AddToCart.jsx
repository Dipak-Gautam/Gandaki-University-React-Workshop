import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import addToCart from "../../LocalStorage/addToCart";
const AddToCart = ({ data }) => {
  const [added, setAdded] = useState(false);

  const add = () => {
    if (added) return;
    addToCart(data);
    setAdded(true);
  };

  return (
    <div
      className={`flex cursor-pointer ${
        added ? "bg-gray-600" : "bg-orange-500"
      }  text-white p-2 px-3 items-center font-medium rounded-md text-sm`}
      onClick={() => add()}
    >
      <MdShoppingCart className="text-lg" />
      <span className="text-center w-20">
        {added ? "Added" : "Add to Cart"}
      </span>
    </div>
  );
};

export default AddToCart;

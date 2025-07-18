import React from "react";
import StarCal from "../../Product/Component/StarCal";
import { BsFillTrash3Fill } from "react-icons/bs";
import Quantity from "./Quantity";
import deleteFromCart from "../../../LocalStorage/deleteFromCart";

const CartCard = ({ productData, setCartData }) => {
  return (
    <div className="border m-5 rounded-xl overflow-hidden flex items-center relative">
      <div
        className="absolute w-8 h-8 flex justify-center items-center bg-red-500 rounded-full top-0 right-0 "
        onClick={() => deleteFromCart(productData, setCartData)}
      >
        <BsFillTrash3Fill className="text-white " />
      </div>
      <div>
        <img src={productData.image} alt="" className="w-44" />
      </div>
      <div className="flex justify-between w-full px-10">
        <div className="space-y-2">
          <div className="text-xl font-bold text-gray-800">
            {productData.name}
          </div>
          <div className="text-thin text-sm">{productData.category}</div>
          <Quantity setCartData={setCartData} productData={productData} />
        </div>
        <div className="text-end space-y-3">
          <StarCal rating={productData.rating} />
          <div className="text-2xl font-bold text-orange-500">
            ${productData.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

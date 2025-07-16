import React from "react";
import AddToCart from "../../Buttons/AddToCart";

const ProductCard = ({ data }) => {
  return (
    <div className="flex flex-col w-64 border border-gray-300 rounded-xl overflow-hidden bg-slate-100  shadow-md shadow-gray-400 hover:border-gray-400 hover:shadow-lg hover:shadow-black/50">
      <div>
        <img src={data.image} alt="" />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="text-gray-500 text-xs text-center">{data.category}</div>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{data.name}</h3>
          <div>{data.rating}</div>
        </div>
        <div className="flex justify-between items-center">
          <AddToCart />
          <div className="text-orange-500 text-lg font-bold">${data.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

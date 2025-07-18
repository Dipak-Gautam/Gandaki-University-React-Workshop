import React from "react";
import AddToCart from "../../Buttons/AddToCart";
import StarCal from "./StarCal";

const ProductCard = ({ data }) => {
  return (
    <div className="flex flex-col w-72 border border-gray-300 rounded-xl overflow-hidden bg-slate-100  shadow-md shadow-gray-400 hover:border-gray-400 hover:shadow-lg hover:shadow-black/50">
      <div>
        <img src={data.image} alt="" className="w-72 h-64" />
      </div>
      <div className="p-2 flex flex-col gap-2">
        <div className="text-gray-500 text-xs text-center">{data.category}</div>
        <div className="flex justify-between items-center">
          <h3 className="text-base font-semibold w-[40%]">{data.name}</h3>
          <div>
            <StarCal rating={Number(data.rating)} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <AddToCart data={data} />
          <div className="text-orange-500 text-lg font-bold">${data.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

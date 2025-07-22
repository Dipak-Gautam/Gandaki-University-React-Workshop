import React, { useEffect, useState } from "react";
import ProductCard from "./Component/ProductCard";

import getProductApi from "../Api/getProductApi";

const Product = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductApi(setProductData);
  }, []);
  return (
    <div className="my-10">
      <div className="text-gray-700 font-bold text-4xl text-center">
        Product
      </div>

      <div className="my-8 flex flex-wrap gap-8 justify-center">
        {productData.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Product;

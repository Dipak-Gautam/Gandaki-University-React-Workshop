import React from "react";
import ProductCard from "./Component/ProductCard";

const tempData = {
  name: "Air Pod 4",
  rating: "3",
  price: "1200",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, perspiciatis ut. Veniam, exercitationem provident atque fugiat cum, recusandae ipsam quos at earum voluptate asperiores.",
  image:
    "https://i5.walmartimages.com/seo/Symphonized-Blast-Wireless-Bluetooth-Headphones-Mic-Over-Ear-Samsung-More-22-Playtime-Hours-Travel-Work-Deep-Bass-Noise-Isolation-Red_78ff8e5b-5570-4eb2-8ca0-422e4a64d51e.a392ad46e96f707de61a5547318e70d1.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
  category: "headphones",
};

const Product = () => {
  return (
    <div className="my-10">
      <div className="text-gray-700 font-bold text-4xl text-center">
        Product
      </div>
      <div className="my-8">
        <ProductCard data={tempData} />
      </div>
    </div>
  );
};

export default Product;

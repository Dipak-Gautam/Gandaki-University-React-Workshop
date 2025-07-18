import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import CartCard from "./Component/CartCard";

const Cart = () => {
  const localStore = localStorage.getItem("cart5");
  const [cartData, setCartData] = useState(JSON.parse(localStore) || []);

  return (
    <div className="flex-1">
      <NavBar />
      <div className=" my-5 ">
        {cartData.map((item) => (
          <CartCard
            key={item.id}
            productData={item}
            setCartData={setCartData}
          />
        ))}
      </div>
    </div>
  );
};

export default Cart;

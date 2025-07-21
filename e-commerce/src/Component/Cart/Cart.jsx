import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import CartCard from "./Component/CartCard";
import OrangeButton from "../Buttons/OrangeButton";
import totalAmount from "../../CustomFunction/totalAmount";
import CheckOutModal from "./CheckOut/CheckOutModal";

const Cart = () => {
  const localStore = localStorage.getItem("cart5");
  const [cartData, setCartData] = useState(JSON.parse(localStore) || []);
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex-1 h-[100vh] flex flex-col">
      <NavBar />
      <div className=" my-5 flex-1  ">
        {cartData.map((item) => (
          <CartCard
            key={item.id}
            productData={item}
            setCartData={setCartData}
          />
        ))}
      </div>
      <div className="flex items-center justify-between p-4 bg-gray-100">
        <OrangeButton title="Checkout" onClick={() => setVisible(true)} />
        <div className="flex gap-4 text-orange-500 text-xl font-bold">
          <p>Total :</p>
          <p>${totalAmount(cartData)}</p>
        </div>
      </div>
      <CheckOutModal
        visible={visible}
        setVisible={setVisible}
        cartData={cartData}
      />
    </div>
  );
};

export default Cart;

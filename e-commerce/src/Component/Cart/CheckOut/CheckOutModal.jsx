import React from "react";
import totalAmount from "../../../CustomFunction/totalAmount";
import UserDetail from "./UserDetail";

const CheckOutModal = ({ visible, setVisible, cartData }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-700/50 flex justify-center items-center  ${
        visible ? "visible" : "hidden"
      }`}
      onClick={() => setVisible(false)}
    >
      <div
        className="w-96 p-3 rounded-xl bg-white border-gray-400 shadow-xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-orange-500 text-xl font-semibold text-center">
          Checkout
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-600">
          <p>Total:</p>
          <p>${totalAmount(cartData)}</p>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-600">
          <p>Payment Method :</p>
          <p>Cash on delivery</p>
        </div>
        <div>
          <UserDetail cartData={cartData} setVisible={setVisible} />
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;

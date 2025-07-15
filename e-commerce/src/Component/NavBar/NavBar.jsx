import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className=" text-xl text-white font-medium flex justify-between w-full h-fit py-3 items-center px-20">
      <div>
        <img src="./logo.png" alt="" className="h-16 w-16" />
      </div>
      <div className="border flex gap-6">
        <div className="flex bg-slate-100 border-gray-600 items-center border rounded-md p-1 px-3">
          <input type="text" placeholder="Search" className="outline-none" />
          <IoSearchSharp className="text-gray-700" />
        </div>
        <div>
          <MdOutlineShoppingCart className="text-4xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

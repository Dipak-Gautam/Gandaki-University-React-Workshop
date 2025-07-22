import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-xl text-white font-medium flex justify-between w-full h-fit py-3 items-center px-4 md:px-20">
      <div onClick={() => navigate("/")}>
        <img src="./logo.png" alt="" className="h-16 w-16" />
      </div>
      <div className="border flex gap-6">
        <div className="flex bg-slate-100 border-gray-600 items-center border rounded-md p-1 px-3">
          <input
            type="text"
            placeholder="Search"
            className="outline-none w-32 text-sm md:text-base"
          />
          <IoSearchSharp className="  md:text-base text-gray-700" />
        </div>
        <NavLink to={"/cart"}>
          <MdOutlineShoppingCart className="text-4xl text-gray-600" />
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;

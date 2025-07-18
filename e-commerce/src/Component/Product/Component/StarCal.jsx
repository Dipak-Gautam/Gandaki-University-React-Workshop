import React from "react";
import { FaStar } from "react-icons/fa6";

const StarCal = ({ rating }) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={` ${rating > index ? "text-orange-500" : "text-gray-400"}`}
        />
      ))}
    </div>
  );
};

export default StarCal;

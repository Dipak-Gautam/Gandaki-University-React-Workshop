import React from "react";

const OrangeButton = ({ title, ...props }) => {
  return (
    <div
      className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 ease-in-out cursor-pointer"
      {...props}
    >
      {title}
    </div>
  );
};

export default OrangeButton;

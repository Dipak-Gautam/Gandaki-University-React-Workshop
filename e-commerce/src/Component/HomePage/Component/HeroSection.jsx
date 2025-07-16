import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div>
      <div className="relative">
        <video
          src="./video2.mp4"
          className="w-full rounded-xl "
          muted
          autoPlay
          loop
        ></video>
        <div className="   bg-no-repeat bg-cover my-5 rounded-xl flex flex-col justify-center p-10 glow-text gap-9 absolute top-0 h-full w-full">
          <div className="text-5xl font-bold text-white">
            <div>"Powering Your World with the </div>
            <div>Latest Tech Shop Smarter, Live Better!"</div>
          </div>
          <div className="text-base w-[40%] text-gray-200 font-medium">
            Explore the latest gadgets, smart devices, and unbeatable tech deals
            – all in one place!" Let me know if you want it to sound more
            premium, budget-friendly, or playful.
          </div>
          <div>
            <div className="flex gap-2 text-lg font-medium text-white items-center">
              <CiLocationOn className="text-white" />
              <p>Pokhara , Nepal</p>
            </div>
            <div className="flex gap-2 text-lg font-medium text-white items-center">
              <FaPhoneAlt className="text-white" />
              <p>9800000000 , 9800000001</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

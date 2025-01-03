import React, { useState } from "react";
import car from "../assets/car.png";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { BsCash } from "react-icons/bs";
const LookingForDriver = ({ vehiclefoundref, setvehiclefound }) => {
  return (
    <div
      ref={vehiclefoundref}
      className="fixed w-full z-10 py-8 bg-white bottom-0 translate-y-full  p-3 border-t-2 border-gray-200 rounded-t-2xl"
    >
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-semibold mb-5">Looking For A Driver</h3>
        <span className="mb-6">
          <IoClose size={24} onClick={() => setvehiclefound(false)} />
        </span>
      </div>
      <div className="flex flex-col items-center gap-2 justify-center">
        <img src={car} alt="" className="h-24" />
        <div className="w-full flex flex-col  gap-3">
          <div className="flex flex-row items-center border-b-2 pb-2">
            <IoLocation />

            <div>
              <h3 className="text-lg font-medium ml-5">151 A</h3>
              <p className="text-md -mt-1 text-gray-600 ml-5">
                Vyankatesh Galli Ajara, 416505
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center border-b-2 pb-2">
            <MdOutlineMyLocation />
            <div>
              <h3 className="text-lg font-medium ml-5">192 A wing</h3>
              <p className="text-md -mt-1 text-gray-600 ml-5">
                Viraj PG, Viman nagar, pune. 416505
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <BsCash />
            <div>
              <p className="text-lg ml-5 text-gray-600">Cash</p>
              <h3 className="text-2xl ml-5 font-medium">₹ 109.20</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookingForDriver;

import React, { useState } from "react";
import car from "../assets/car.png";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { BsCash } from "react-icons/bs";

function WaitingForDriver({ waitingfordriverref, waitingfordriver }) {
  return (
    <div
      ref={waitingfordriverref}
      className="fixed w-full z-10 py-8 bg-white bottom-0  p-3 border-t-2 border-gray-200 rounded-t-2xl"
    >
      <div className="flex flex-row items-center justify-between border-b-2 pb-2">
        <h3 className="text-2xl font-semibold mb-5">
          Meet at the pickup point
        </h3>
        <div className="flex flex-col justify-center items-center bg-black text-white  w-14 h-14">
          <h2 className="text-xl">2</h2>
          <p>min</p>
        </div>
      </div>
      <div>
        <div className="w-fill flex items-center justify-between px-3">
          <img src={car} alt="" className="h-14" />

          <div className="text-right">
            <h2 className="text-lg font-medium ">Harsh Bailurkar</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MH 09 BE 2434</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingForDriver;

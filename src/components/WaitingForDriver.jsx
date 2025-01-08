import React, { useState } from "react";
import car from "../assets/car.png";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { BsCash } from "react-icons/bs";

function WaitingForDriver({
  rideDetails,
  waitingfordriverref,
  waitingfordriver,
}) {
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
        <div className="w-fill flex flex-col items-center justify-between px-3">
          <div className="flex justify-between w-full">
            <img src={car} alt="" className="h-14" />

            <div className="text-right">
              <h2 className="text-lg font-medium capitalize ">
                {rideDetails?.data.captain.fullName.firstName +
                  " " +
                  rideDetails?.data.captain.fullName.lastName}
              </h2>

              <h4 className="text-xl font-semibold -mt-1 -mb-1 uppercase ">
                {rideDetails?.data.captain.vehical.plate}
              </h4>
              <p className="text-sm text-gray-600 capitalize">
                {rideDetails?.data.captain.vehical.capacity +
                  " seater " +
                  rideDetails?.data.captain.vehical.vehicleType}
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col  gap-3">
            <div className="flex justify-between mt-3 items-center bg-slate-100">
              <h1 className="text-black text-right  rounded font-semibold text-2xl  p-1 tracking-widest">
                OTP
              </h1>
              <h1 className="text-black text-right  rounded font-semibold text-3xl bg-slate-100 p-1 tracking-widest">
                {rideDetails?.data.otp}
              </h1>
            </div>
            <div className="flex flex-row items-center border-b-2 pb-2">
              <IoLocation />

              <div>
                <h3 className="text-lg font-medium ml-5">151 A</h3>
                <p className="text-md -mt-1 text-gray-600 ml-5">
                  {rideDetails?.data.pickup}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center border-b-2 pb-2">
              <MdOutlineMyLocation />
              <div>
                <h3 className="text-lg font-medium ml-5">192 A wing</h3>
                <p className="text-md -mt-1 text-gray-600 ml-5">
                  {rideDetails?.data.destination}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center ">
              <BsCash />
              <div>
                <p className="text-lg ml-5 text-gray-600">Cash</p>
                <h3 className="text-2xl ml-5 font-medium">
                  ₹ {rideDetails?.data.fare}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WaitingForDriver;

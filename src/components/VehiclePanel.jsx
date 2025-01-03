import React, { useState } from "react";
import car from "../assets/car.png";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function VehiclePanel({
  vehiclepanelref,
  setvehiclepanel,
  setselectedvehicledetailspanel,
}) {
  return (
    <div
      ref={vehiclepanelref}
      className="fixed w-full z-10 py-8 bg-white bottom-0 translate-y-full  p-3 border-t-2 border-gray-200 rounded-t-2xl"
    >
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-semibold mb-5">Choose Your Ride</h3>
        <span className="mb-6" onClick={() => setvehiclepanel(false)}>
          <IoClose size={24} />
        </span>
      </div>

      <div className="flex w-full items-center p-2 justify-between border-2 active:border-black rounded-xl my-1" onClick={()=>setselectedvehicledetailspanel(true)} >
        <img src={car} alt="" className="h-16" />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg ">
            UserGo{" "}
            <span className="flex items-center gap-3">
              <FaUser size={14} />4
            </span>
          </h4>
          <h5 className="text-sm font-medium">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable, comnpact rides</p>
        </div>
        <h2 className="text-xl   font-semibold">₹192.20</h2>
      </div>
      <div className="flex w-full items-center p-2 justify-between border-2 active:border-black rounded-xl my-1 " onClick={()=>setselectedvehicledetailspanel(true)}>
        <img
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
          className="h-16"
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg ">
            MOTO{" "}
            <span className="flex items-center gap-3">
              <FaUser size={14} />1
            </span>
          </h4>
          <h5 className="text-sm font-medium">3 mins away</h5>
          <p className="text-xs text-gray-600">Affordable, motor cycle ride</p>
        </div>
        <h2 className="text-xl   font-semibold">₹65.20</h2>
      </div>
      <div className="flex w-full items-center p-2 justify-between border-2 active:border-black rounded-xl my-1 " onClick={()=>setselectedvehicledetailspanel(true)}>
        <img
          src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
          alt=""
          className="h-16"
        />
        <div className=" w-1/2">
          <h4 className="font-medium text-lg ">
            Auto{" "}
            <span className="flex items-center gap-3">
              <FaUser size={14} />3
            </span>
          </h4>
          <h5 className="text-sm font-medium">2 mins away</h5>
          <p className="text-xs text-gray-600">Affordable,Auto ride</p>
        </div>
        <h2 className="text-xl   font-semibold">₹100.20</h2>
      </div>
    </div>
  );
}

export default VehiclePanel;

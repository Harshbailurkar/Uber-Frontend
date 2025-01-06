import React, { useState } from "react";
import car from "../assets/car.png";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { BsCash } from "react-icons/bs";

function SelectedVehicleDetails({
  selectedVehicleDetailsRef,
  vehicleDetailsPanel,
  setSelectedVehicleDetailsPanel,
  setvehiclefound,
  vehiclefound,
  createRide,
  fareData,
  pickupLocation,
  destination,
  vehicleType,
}) {
  const vehicleImages = {
    auto: "https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png",
    bike: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png",
    car: car,
  };
  const vehicleImg = vehicleImages[vehicleType] || "";
  return (
    <div
      ref={selectedVehicleDetailsRef}
      className="fixed w-full z-10 py-8 bg-white bottom-0 translate-y-full  p-3 border-t-2 border-gray-200 rounded-t-2xl"
    >
      {!vehiclefound && (
        <div className="flex flex-row items-center justify-between">
          <h3 className="text-2xl font-semibold mb-5">Confirm Your Ride</h3>

          <span
            className="mb-6"
            onClick={() => setSelectedVehicleDetailsPanel(false)}
          >
            <IoClose size={24} />
          </span>
        </div>
      )}
      {pickupLocation && destination && vehicleType && fareData && (
        <div className="flex flex-col items-center gap-2 justify-center">
          <img src={vehicleImg} alt="" className="h-24" />
          <div className="w-full flex flex-col  gap-3">
            <div className="flex flex-row items-center border-b-2 pb-2">
              <IoLocation />

              <div>
                <h3 className="text-lg font-medium ml-5">151 A</h3>
                <p className="text-md -mt-1 text-gray-600 ml-5">
                  {pickupLocation}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center border-b-2 pb-2">
              <MdOutlineMyLocation />
              <div>
                <h3 className="text-lg font-medium ml-5">192 A wing</h3>
                <p className="text-md -mt-1 text-gray-600 ml-5">
                  {destination}
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center ">
              <BsCash />
              <div>
                <p className="text-lg ml-5 text-gray-600">Cash</p>
                <h3 className="text-2xl ml-5 font-medium">
                  ₹ {fareData[vehicleType]}
                </h3>
              </div>
            </div>
          </div>
          <button
            className=" mt-5 w-full p-2 text-white text-lg bg-green-600 font-semibold rounded-lg"
            onClick={() => {
              setvehiclefound(true);
              createRide();
            }}
          >
            Confirm
          </button>
        </div>
      )}
    </div>
  );
}

export default SelectedVehicleDetails;

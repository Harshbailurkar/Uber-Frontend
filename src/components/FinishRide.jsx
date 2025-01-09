import React from "react";
import { IoClose } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { finishRide } from "../API/rideAPI";
import { useNavigate } from "react-router-dom";
function FinishRide({
  ride,
  finishridepanelref,
  setfinishRidePanel,
  finishridepanel,
}) {
  const navigate = useNavigate();
  function completeRide() {
    const token = localStorage.getItem("ctoken");

    const data = {
      rideId: ride._id,
    };
    finishRide(data, token).then((res) => {
      navigate("/captain-home");
    });
  }

  return (
    <div
      ref={finishridepanelref}
      className="fixed w-full z-10 py-8 bg-white bottom-0 translate-y-full  p-3 border-t-2 border-gray-200  h-screen"
    >
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-semibold mb-5">Finish this Ride !</h3>

        <span
          className="mb-6"
          onClick={() => {
            setfinishRidePanel(false);
          }}
        >
          <IoClose size={24} />
        </span>
      </div>
      <div className="flex items-center justify-between p-2 bg-yellow-400 rounded-lg">
        <div className="flex items-center justify-start gap-4 mt-2">
          <img
            className="h-12 w-12 rounded-full object-cover "
            src="https://avatars.githubusercontent.com/u/113308692?v=4"
            alt=""
          />
          <h2 className="text-lg font-medium capitalize">
            {ride?.user.fullName.firstName + " " + ride?.user.fullName.lastName}
          </h2>
        </div>
        <h5 className="text-xl font-semibold">2.2 Km</h5>
      </div>

      <div className="flex flex-col items-center gap-2 justify-center mt-6">
        <div className="w-full flex flex-col  gap-3">
          <div className="flex flex-row items-center border-b-2 pb-2">
            <IoLocation />

            <div>
              <h3 className="text-lg font-medium ml-5">151 A</h3>
              <p className="text-md -mt-1 text-gray-600 ml-5">{ride?.pickup}</p>
            </div>
          </div>
          <div className="flex flex-row items-center border-b-2 pb-2">
            <MdOutlineMyLocation />
            <div>
              <h3 className="text-lg font-medium ml-5">192 A wing</h3>
              <p className="text-md -mt-1 text-gray-600 ml-5">
                {ride?.destination}
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <BsCash />
            <div>
              <p className="text-lg ml-5 text-gray-600">Cash</p>
              <h3 className="text-2xl ml-5 font-medium">₹ {ride?.fare}</h3>
            </div>
          </div>
        </div>

        <button
          className="  w-full p-2 text-gray-100  text-lg bg-gray-900 font-semibold rounded-lg"
          onClick={completeRide}
        >
          Complete Ride
        </button>

        <p className="text-sm text-gray-600 text-center">
          If you complete with the payment, click on Complete Ride{" "}
        </p>
      </div>
    </div>
  );
}

export default FinishRide;

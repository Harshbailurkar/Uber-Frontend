import React from "react";
import car from "../assets/car.png";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen flex flex-col">
      <Link to="/user-home">
        <div className="fixed h-10 w-10 bg-white flex items-center justify-center rounded-full top-5 left-5 z-10">
          <FaHome />
        </div>
      </Link>
      {/* Map Section */}
      <div className="h-1/2 w-full">
        <img
          src="https://media.istockphoto.com/vectors/philadelphia-colored-vector-map-vector-id1252287417?k=20&m=1252287417&s=612x612&w=0&h=9PGRK5EUltJ_2UDwfmRns2BaqaNDynNNeHN4Ha1K8uc="
          alt="Map Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="h-1/2 mt-3 px-4">
        {/* Car and Driver Info */}
        <div className="flex items-center justify-between">
          <img src={car} alt="Car Image" className="h-14" />
          <div className="text-right">
            <h2 className="text-lg font-medium">Harsh Bailurkar</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MH 09 BE 2434</h4>
            <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>

        {/* Ride Details */}
        <div className="flex flex-col gap-3 mt-5">
          <div className="flex items-center border-b-2 pb-2">
            <IoLocation className="mr-2" />
            <div>
              <h3 className="text-lg font-medium">151 A</h3>
              <p className="text-md text-gray-600">
                Vyankatesh Galli Ajara, 416505
              </p>
            </div>
          </div>
          <div className="flex items-center border-b-2 pb-2">
            <MdOutlineMyLocation className="mr-2" />
            <div>
              <h3 className="text-lg font-medium">192 A wing</h3>
              <p className="text-md text-gray-600">
                Viraj PG, Viman nagar, Pune, 416505
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <BsCash className="mr-2" />
            <div>
              <p className="text-lg text-gray-600">Cash</p>
              <h3 className="text-2xl font-medium">₹ 109.20</h3>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <button className="w-full my-5 bg-black text-white p-3 rounded-lg hover:bg-slate-900  transition">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;

import React from "react";
import { useSelector } from "react-redux";
import UberLogo from "../assets/Uber-Logo.png";
import { useNavigate, Link } from "react-router-dom";

export default function CaptainProfile() {
  const captain = useSelector((state) => state.captain);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col  justify-center p-5 bg-gray-100">
      <Link to="/captain-home">
        <div className="flex items-center gap-1 ">
          <img src={UberLogo} alt="" className="w-16 z-10" />
          <h2 className="font-bold">captain</h2>
        </div>
      </Link>
      <div className="bg-white rounded-xl mt-7 shadow-lg w-full max-w-md p-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-teal-500 text-white flex items-center justify-center rounded-full text-4xl font-bold">
            {captain?.fullName?.firstName[0]?.toUpperCase() || "C"}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {captain?.fullName?.firstName
              ? captain.fullName.firstName.charAt(0).toUpperCase() +
                captain.fullName.firstName.slice(1)
              : "Not Provided"}{" "}
            {captain?.fullName?.lastName
              ? captain.fullName.lastName.charAt(0).toUpperCase() +
                captain.fullName.lastName.slice(1)
              : "Not Provided"}
          </h2>
          <p className="text-gray-600">{captain?.email}</p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Details</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">First Name:</span>
              <span className="text-gray-800 font-semibold">
                {captain?.fullName?.firstName
                  ? captain.fullName.firstName.charAt(0).toUpperCase() +
                    captain.fullName.firstName.slice(1)
                  : "Not Provided"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Last Name:</span>
              <span className="text-gray-800 font-semibold">
                {captain?.fullName?.lastName
                  ? captain.fullName.lastName.charAt(0).toUpperCase() +
                    captain.fullName.lastName.slice(1)
                  : "Not Provided"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Email:</span>
              <span className="text-gray-800 font-semibold">
                {captain?.email || "Not Provided"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Vehicle Color:</span>
              <span className="text-gray-800 font-semibold">
                {captain?.vehical?.color || "Not Provided"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Vehicle Plate:</span>
              <span className="text-gray-800 font-semibold">
                {captain?.vehical?.plate || "Not Provided"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Capacity:</span>
              <span className="text-gray-800 font-semibold">
                {captain?.vehical?.capacity || "Not Provided"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Vehicle Type:</span>
              <span className="text-gray-800 font-semibold">
                {captain?.vehical?.vehicleType || "Not Provided"}
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex justify-around">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow hover:bg-teal-600 transition">
            Edit Profile
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-red-400 transition"
            onClick={() => navigate("/login")}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

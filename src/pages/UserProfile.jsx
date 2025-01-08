import React from "react";
import { useSelector } from "react-redux";
import UberLogo from "../assets/Uber-Logo.png";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../API/userAPI";
function UserProfile() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  async function handleLogOut() {
    const token = localStorage.getItem("token");
    await logoutUser(token)
      .then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="min-h-screen  flex items-center justify-center p-5">
      <img
        src={UberLogo}
        alt=""
        className="w-16 absolute left-5 top-5"
        onClick={() => navigate("/user-home")}
      />
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6">
        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-teal-500 text-white flex items-center justify-center rounded-full text-4xl font-bold">
            {user?.fullName?.firstName[0]?.toUpperCase() || "U"}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">
            {user?.fullName?.firstName} {user?.fullName?.lastName}
          </h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Details</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">First Name:</span>
              <span className="text-gray-800 font-semibold">
                {user?.fullName?.firstName}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Last Name:</span>
              <span className="text-gray-800 font-semibold">
                {user?.fullName?.lastName}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Email:</span>
              <span className="text-gray-800 font-semibold">{user?.email}</span>
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
            onClick={handleLogOut}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;

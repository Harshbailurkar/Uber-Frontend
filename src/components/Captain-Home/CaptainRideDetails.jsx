import React from "react";
import { IoTime } from "react-icons/io5";
import { IoIosTimer } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { GiPathDistance } from "react-icons/gi";

function CaptainRideDetails({ captainMonthlyRides, captainTotalDistance }) {
  return (
    <div className="flex justify-center items-start gap-4 p-5 bg-gray-100 rounded-xl mt-6">
      <div className="flex flex-col items-center text-center">
        <IoTime size={20} className="mb-1" />
        <h5 className="text-lg font-medium">10.2</h5>
        <p className="text-sm text-gray-600">Hours Online</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <GiPathDistance size={20} className="mb-1" />
        <h5 className="text-lg font-medium">{captainTotalDistance} km</h5>
        <p className="text-sm text-gray-600">Monthly distance travel</p>
      </div>
      <div className="flex flex-col items-center text-center">
        <CgNotes size={20} className="mb-1" />
        <h5 className="text-lg font-medium">{captainMonthlyRides}</h5>
        <p className="text-sm text-gray-600">Monthly Rides</p>
      </div>
    </div>
  );
}

export default CaptainRideDetails;

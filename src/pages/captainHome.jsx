import React, { useContext } from "react";

import { useSelector } from "react-redux";

function CaptainHome() {
  const captain = useSelector((state) => state.captain);

  return (
    <div>
      <h1>Captain Profile</h1>
      <p>Email: {captain.email}</p>
      <p>First Name: {captain.fullName.firstName}</p>
      <p>Last Name: {captain.fullName.lastName}</p>
      <p>Vehicle Type: {captain.vehical.vehicleType}</p>
      <p>Vehicle Capacity: {captain.vehical.capacity}</p>
      <p>Vehicle Color: {captain.vehical.color}</p>
      <p>Vehicle Plate: {captain.vehical.plate}</p>
    </div>
  );
}

export default CaptainHome;

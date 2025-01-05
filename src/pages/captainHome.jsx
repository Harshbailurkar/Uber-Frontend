import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UberLogo from "../assets/Uber-Logo.png";
import CaptainRideDetails from "../components/Captain-Home/CaptainRideDetails";
import CaptainDetails from "../components/Captain-Home/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

function CaptainHome() {
  const captain = useSelector((state) => state.captain);
  const navigate = useNavigate();
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupRef = useRef(null);
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopup, setConfirmRidePopup] = useState(false);

  useGSAP(() => {
    gsap.to(ridePopupPanelRef.current, {
      transform: ridePopupPanel ? "translateY(0)" : "translateY(100%)",
    });
  }, [ridePopupPanel]);
  useGSAP(() => {
    gsap.to(confirmRidePopupRef.current, {
      transform: confirmRidePopup ? "translateY(0)" : "translateY(100%)",
    });
  }, [confirmRidePopup]);

  return (
    <div className="h-screen flex flex-col">
      <div className=" fixed  flex items-center justify-between z-10 p-3 top-0 w-full">
        <Link to="/captain-home">
          <div className="flex items-center gap-1">
            <img src={UberLogo} alt="" className="w-16 z-10" />
            <h2 className="font-bold">captain</h2>
          </div>
        </Link>
        <Link to="/captain-profile">
          <div className=" h-10 w-10 bg-[#004D40] text-white font-semibold flex items-center justify-center rounded-full ">
            {captain?.fullName?.firstName[0]?.toUpperCase()}
          </div>
        </Link>
      </div>
      {/* Map Section */}
      <div className="h-3/5 w-full">
        <img
          src="https://media.istockphoto.com/vectors/philadelphia-colored-vector-map-vector-id1252287417?k=20&m=1252287417&s=612x612&w=0&h=9PGRK5EUltJ_2UDwfmRns2BaqaNDynNNeHN4Ha1K8uc="
          alt="Map Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Bottom Section */}
      <div className="h-2/5 p-4">
        <CaptainDetails />
        <CaptainRideDetails />
      </div>

      {/* Floating Components */}

      <RidePopup
        ridepopuppanelref={ridePopupPanelRef}
        setridepopuppanel={setRidePopupPanel}
        setconfirmridepopup={setConfirmRidePopup}
      />
      <ConfirmRidePopup
        confirmridepopup={confirmRidePopupRef}
        setconfirmridepopup={setConfirmRidePopup}
        setridepopuppanel={setRidePopupPanel}
      />
    </div>
  );
}

export default CaptainHome;

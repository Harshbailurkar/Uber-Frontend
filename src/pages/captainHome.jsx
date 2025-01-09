import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import UberLogo from "../assets/Uber-Logo.png";
import CaptainRideDetails from "../components/Captain-Home/CaptainRideDetails";
import CaptainDetails from "../components/Captain-Home/CaptainDetails";
import RidePopup from "../components/RidePopup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import { useSocket } from "../context/SocketContext";
import { rideConfirm } from "../API/rideAPI";
import LiveTracking from "../components/LiveTracking";

function CaptainHome() {
  const captain = useSelector((state) => state.captain);
  const navigate = useNavigate();
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupRef = useRef(null);
  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopup, setConfirmRidePopup] = useState(false);
  const [rideDetails, setRideDetails] = useState(null);
  const { sendMessage, receiveMessage } = useSocket();

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

  useEffect(() => {
    const checkSocketConnection = setInterval(() => {
      if (sendMessage && receiveMessage) {
        sendMessage("join", {
          userType: "captain",
          userId: localStorage.getItem("captainId"),
        });
        clearInterval(checkSocketConnection);
      }
    }, 1000);

    return () => clearInterval(checkSocketConnection);
  }, [sendMessage, receiveMessage]);

  useEffect(() => {
    const updateLocationInterval = setInterval(() => {
      if (sendMessage && receiveMessage) {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            const location = {
              ltd: latitude,
              lng: longitude,
            };
            sendMessage("update-location-captain", {
              userId: localStorage.getItem("captainId"),
              location,
            });
          });
        }
      }
    }, 10000);

    return () => clearInterval(updateLocationInterval);
  }, [sendMessage, receiveMessage]);

  async function confirmRide() {
    const data = {
      rideId: rideDetails.data._id,
    };

    const token = localStorage.getItem("ctoken");

    const response = await rideConfirm(data, token);
  }

  useEffect(() => {
    receiveMessage("new-ride", (data) => {
      setRideDetails(data);
      setRidePopupPanel(true);
    });
  }, [receiveMessage]);

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
        <LiveTracking />
      </div>

      {/* Bottom Section */}
      <div className="h-2/5 p-4">
        <CaptainDetails />
        <CaptainRideDetails />
      </div>

      {/* Floating Components */}

      <RidePopup
        ride={rideDetails}
        ridepopuppanelref={ridePopupPanelRef}
        setridepopuppanel={setRidePopupPanel}
        setconfirmridepopup={setConfirmRidePopup}
        confirmRide={confirmRide}
      />
      <ConfirmRidePopup
        rideDetails={rideDetails}
        confirmridepopup={confirmRidePopupRef}
        setconfirmridepopup={setConfirmRidePopup}
        setridepopuppanel={setRidePopupPanel}
      />
    </div>
  );
}

export default CaptainHome;

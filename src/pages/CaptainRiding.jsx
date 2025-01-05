import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import UberLogo from "../assets/Uber-Logo.png";
import { FaChevronUp } from "react-icons/fa6";
import { useEffect } from "react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

function CaptainRiding() {
  const [finishRidePanel, setFinishRidePanel] = useState(false); // Default state
  const finishRidePanelRef = useRef(null);

  useEffect(() => {
    if (finishRidePanelRef.current) {
      gsap.to(finishRidePanelRef.current, {
        y: finishRidePanel ? 0 : "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen flex flex-col relative">
      {/* Header Section */}
      <div className="fixed flex items-center justify-between z-10 p-3 top-0 w-full">
        <Link to="/captain-home">
          <div className="flex items-center gap-1">
            <img src={UberLogo} alt="" className="w-16 z-10" />
            <h2 className="font-bold">captain</h2>
          </div>
        </Link>
      </div>

      {/* Map Section */}
      <div className="h-4/5 w-full">
        <img
          src="https://media.istockphoto.com/vectors/philadelphia-colored-vector-map-vector-id1252287417?k=20&m=1252287417&s=612x612&w=0&h=9PGRK5EUltJ_2UDwfmRns2BaqaNDynNNeHN4Ha1K8uc="
          alt="Map Image"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Ride Information Section */}
      <div
        className="h-1/5 px-4 w-full bg-yellow-400 flex flex-col items-center justify-between relative"
        onClick={() => setFinishRidePanel(true)} // Open panel on click
      >
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
          <FaChevronUp size={20} />
        </div>

        <div className="w-full mt-12 flex items-center justify-between">
          <h4 className="text-xl font-semibold">4 KM away</h4>
          <button
            className="bg-black text-white font-semibold py-2 px-6 rounded-lg"
            onClick={() => setFinishRidePanel(true)} // Open panel on button click
          >
            Complete Ride
          </button>
        </div>
        <FinishRide
          finishridepanelref={finishRidePanelRef}
          setfinishRidePanel={setFinishRidePanel}
          finishridepanel={finishRidePanel}
        />
      </div>
    </div>
  );
}

export default CaptainRiding;

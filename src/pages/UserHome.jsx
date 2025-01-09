import React, { useState, useRef, useEffect } from "react";
import UberLogo from "../assets/Uber-Logo.png";
import { useSelector } from "react-redux";
import { useFormAction, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import LocationSearchPanel from "../components/LocationSearchPanel";
import SelectedVehicleDetails from "../components/SelectedVehicleDetails";
import VehiclePanel from "../components/VehiclePanel";
import WaitingForDriver from "../components/WaitingForDriver";
import LookingForDriver from "../components/LookingForDriver";
import { getSuggestions } from "../API/maps";
import { createRide } from "../API/rideAPI";
import { useSocket } from "../context/SocketContext";
import LiveTrackingForUser from "../components/LiveTrackingForUser";

function UserHome() {
  const user = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [selectedVehicleDetailsPanel, setSelectedVehicleDetailsPanel] =
    useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleType, setVehicleType] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [rideDetails, setRideDetails] = useState(null);
  const [currentAddress, setCurrentAddress] = useState("");

  const [state, actionFunction, isPending] = useFormAction(formAction, {
    pickupLocation: "",
    destination: "",
  });
  const navigate = useNavigate();

  const PannelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const selectedVehicleDetailsRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const token = localStorage.getItem("token");

  const { sendMessage, receiveMessage } = useSocket();

  useGSAP(() => {
    if (visible) {
      gsap.to(PannelRef.current, {
        height: "70%",
        padding: "24px",
        opacity: 1,
      });
    } else {
      gsap.to(PannelRef.current, {
        height: "0%",
        padding: "0px",
        opacity: 0,
      });
    }
  }, [visible]);

  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel ? "translateY(0)" : "translateY(100%)",
    });
  }, [vehiclePanel]);

  useGSAP(() => {
    gsap.to(selectedVehicleDetailsRef.current, {
      transform: selectedVehicleDetailsPanel
        ? "translateY(0)"
        : "translateY(100%)",
    });
  }, [selectedVehicleDetailsPanel]);

  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? "translateY(0)" : "translateY(100%)",
    });
  }, [vehicleFound]);

  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      transform: waitingForDriver ? "translateY(0)" : "translateY(100%)",
    });
  }, [waitingForDriver]);

  useEffect(() => {
    const checkSocketConnection = setInterval(() => {
      if (sendMessage && receiveMessage) {
        sendMessage("join", {
          userType: "user",
          userId: localStorage.getItem("userId"),
        });
        clearInterval(checkSocketConnection);
      }
    }, 1000);

    return () => clearInterval(checkSocketConnection);
  }, [sendMessage, receiveMessage]);

  useEffect(() => {
    receiveMessage("ride-confirmed", (ride) => {
      setRideDetails(ride);
      setVehiclePanel(false);
      setSelectedVehicleDetailsPanel(false);
      setVehicleFound(false);
      setWaitingForDriver(true);
    });
  }, [receiveMessage]);

  useEffect(() => {
    receiveMessage("ride-started", (ride) => {
      setWaitingForDriver(false);
      navigate("/riding", { state: { rideDetails: ride } });
    });
  }, [receiveMessage, navigate]);

  useEffect(() => {
    setPickupLocation(currentAddress);
  }, [currentAddress]);

  async function formAction(prevState, FormData) {
    const data = {
      pickupLocation: FormData.get("pickupLocation"),
      destination: FormData.get("destination"),
    };

    return data;
  }

  async function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === "pickupLocation") {
      setPickupLocation(value);
    } else if (name === "destination") {
      setDestination(value);
    }
    try {
      const response = await getSuggestions({ address: value }, token);
      setSuggestions(response);
    } catch (error) {
      console.error("Error fetching suggestions:", error.message);
    }
  }

  async function createRideFn() {
    const data = {
      pickup: pickupLocation,
      destination: destination,
      vehicleType: vehicleType,
    };
    try {
      const response = await createRide(data, token);
    } catch (error) {
      console.error("Error creating ride:", error.message);
    }
  }

  function handleSuggestionClick(suggestion, inputType) {
    if (inputType === "pickupLocation") {
      setPickupLocation(suggestion.description);
    } else if (inputType === "destination") {
      setDestination(suggestion.description);
      setVehiclePanel(true);
    }
  }

  function visitUserProfile() {
    navigate("/user-profile");
  }

  return (
    <div className="h-screen w-screen flex flex-col relative overflow-hidden">
      <div className="flex flex-row items-center justify-end z-[1000]">
        {!visible && (
          <div>
            <img src={UberLogo} alt="" className="w-16 absolute left-5 top-5" />

            <div
              className="absolute  right-5 top-5 font-bold bg-[#004D40] text-white w-10 h-10 flex items-center justify-center rounded-full z-10"
              onClick={visitUserProfile}
            >
              {user?.fullName?.firstName[0]?.toUpperCase() || "U"}
            </div>
          </div>
        )}
      </div>
      <div
        className={`h-4/6 w-full absolute ${!visible ? "z-[999]" : "z-[-999]"}`}
      >
        <LiveTrackingForUser SetCurrentAddress={setCurrentAddress} />
      </div>
      <div className="absolute flex flex-col h-screen justify-end top-0 w-full z-10">
        <div className="h-[30%] bg-white p-5 relative rounded-t-2xl">
          <div className="flex justify-between">
            <h4 className="text-2xl font-semibold">Find Trip</h4>
            <h5 className="p-1">
              {visible ? (
                <SlArrowDown size={17} onClick={() => setVisible(false)} />
              ) : (
                <SlArrowUp size={17} onClick={() => setVisible(true)} />
              )}
            </h5>
          </div>

          <form action={actionFunction}>
            <div className="line absolute h-14 w-1 top-[45%] left-10 bg-gray-800 rounded-full "></div>
            <input
              type="text"
              name="pickupLocation"
              placeholder="Add a pickup location"
              className="bg-[#eee] px-12 py-2 rounded-lg w-full mt-5"
              onClick={() => setVisible(true)}
              onChange={handleInputChange}
              value={pickupLocation}
            />
            <input
              type="text"
              name="destination"
              placeholder="Enter your destination"
              className="bg-[#eee] px-12 py-2 rounded-lg w-full mt-3"
              onClick={() => setVisible(true)}
              onChange={handleInputChange}
              value={destination}
            />
          </form>
          {visible && (
            <button
              className="bg-black w-full text-lg font-medium mt-3 text-white rounded-lg p-2"
              onClick={() => {
                if (pickupLocation && destination) setVehiclePanel(true);
              }}
            >
              Find Trip
            </button>
          )}
        </div>
        <div ref={PannelRef} className="bg-white">
          <LocationSearchPanel
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
            suggestions={suggestions}
            onSuggestionClick={handleSuggestionClick}
            inputType={destination ? "destination" : "pickupLocation"}
          />
        </div>
      </div>
      <VehiclePanel
        vehiclepanelref={vehiclePanelRef}
        setvehiclepanel={setVehiclePanel}
        setselectedvehicledetailspanel={setSelectedVehicleDetailsPanel}
        pickuplocation={pickupLocation}
        vehiclepanel={vehiclePanel}
        Destination={destination}
        selectVehicleType={setVehicleType}
        setfaredata={setTotalAmount}
      />

      <SelectedVehicleDetails
        selectedVehicleDetailsRef={selectedVehicleDetailsRef}
        vehicleDetailsPanel={selectedVehicleDetailsPanel}
        setSelectedVehicleDetailsPanel={setSelectedVehicleDetailsPanel}
        setvehiclefound={setVehicleFound}
        vehiclefound={vehicleFound}
        createRide={createRideFn}
        pickupLocation={pickupLocation}
        destination={destination}
        fareData={totalAmount}
        vehicleType={vehicleType}
      />
      <LookingForDriver
        vehiclefoundref={vehicleFoundRef}
        setvehiclefound={setVehicleFound}
        vehicleType={vehicleType}
        pickupLocation={pickupLocation}
        destination={destination}
        fareData={totalAmount}
      />
      <div>
        <WaitingForDriver
          waitingfordriverref={waitingForDriverRef}
          waitingfordriver={waitingForDriver}
          rideDetails={rideDetails}
        />
      </div>
    </div>
  );
}

export default UserHome;

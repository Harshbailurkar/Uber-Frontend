import React, { useState, useRef } from "react";
import UberLogo from "../assets/Uber-Logo.png";
import { useSelector } from "react-redux";
import { useActionState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import { useFormAction } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RiArrowDownWideLine } from "react-icons/ri";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import LocationSearchPanel from "../components/LocationSearchPanel";

function UserHome() {
  const user = useSelector((state) => state.user);
  const [visible, setVisible] = useState(false);
  const [state, actionFunction, isPending] = useFormAction(formAction, {
    pickupLocation: "",
    destination: "",
  });

  const PannelRef = useRef(null);
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

  async function formAction(prevState, FormData) {
    const data = {
      pickupLocation: FormData.get("pickupLocation"),
      destination: FormData.get("destination"),
    };
    console.log(data);
    return data;
  }

  return (
    <div className="h-screen w-screen flex flex-col relative">
      <div className="flex flex-row items-center justify-end">
        <img src={UberLogo} alt="" className="w-16 absolute left-5 top-5" />
        <div className="absolute  right-5 top-5 font-bold bg-[#004D40] text-white w-10 h-10 flex items-center justify-center rounded-full">
          {user.fullName.firstName[0].toUpperCase()}
        </div>
      </div>
      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          src="https://media.istockphoto.com/vectors/philadelphia-colored-vector-map-vector-id1252287417?k=20&m=1252287417&s=612x612&w=0&h=9PGRK5EUltJ_2UDwfmRns2BaqaNDynNNeHN4Ha1K8uc="
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className=" absolute flex flex-col h-screen justify-end top-0 w-full">
        <div className="h-[30%]  bg-white p-5 relative rounded-t-2xl">
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
            />
            <input
              type="text"
              name="destination"
              placeholder="Enter your destination"
              className="bg-[#eee] px-12 py-2 rounded-lg w-full mt-3"
              onClick={() => setVisible(true)}
            />
          </form>
        </div>
        <div ref={PannelRef} className={`h-[70%] bg-white `}>
          <LocationSearchPanel />
        </div>
      </div>
    </div>
  );
}

export default UserHome;

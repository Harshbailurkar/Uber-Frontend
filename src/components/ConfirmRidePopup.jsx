import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { MdOutlineMyLocation } from "react-icons/md";
import { BsCash } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function ConfirmRidePopup({
  confirmridepopup,
  setconfirmridepopup,
  setridepopuppanel,
}) {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputs = useRef([]);
  const navigate = useNavigate();

  const handleChange = (value, index) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Automatically focus the next input
      if (value && index < 3) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").trim();

    // Validate pasted data (only digits and length <= 4)
    if (/^\d{1,4}$/.test(pasteData)) {
      const newOtp = pasteData.split("").slice(0, 4); // Get up to 4 digits
      setOtp([...newOtp, "", "", "", ""].slice(0, 4)); // Fill in the OTP array

      // Auto-focus inputs based on pasted data length
      newOtp.forEach((digit, index) => {
        if (inputs.current[index]) {
          inputs.current[index].value = digit; // Populate inputs directly
          if (index < 3) {
            inputs.current[index + 1].focus();
          }
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OTP submitted:", otp.join(""));
    navigate("/captain-riding");
  };

  return (
    <div
      ref={confirmridepopup}
      className="fixed w-full z-10 py-8 bg-white bottom-0 translate-y-full  p-3 border-t-2 border-gray-200  h-screen"
    >
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-2xl font-semibold mb-5">Pickup Your Ride !</h3>

        <span
          className="mb-6"
          onClick={() => {
            setconfirmridepopup(false);
          }}
        >
          <IoClose size={24} />
        </span>
      </div>
      <div className="flex items-center justify-between p-2 bg-yellow-400 rounded-lg">
        <div className="flex items-center justify-start gap-4 mt-2">
          <img
            className="h-12 w-12 rounded-full object-cover "
            src="https://avatars.githubusercontent.com/u/113308692?v=4"
            alt=""
          />
          <h2 className="text-lg font-medium">Harsh Bailurkar</h2>
        </div>
        <h5 className="text-xl font-semibold">2.2 Km</h5>
      </div>

      <div className="flex flex-col items-center gap-2 justify-center mt-6">
        <div className="w-full flex flex-col  gap-3">
          <div className="flex flex-row items-center border-b-2 pb-2">
            <IoLocation />

            <div>
              <h3 className="text-lg font-medium ml-5">151 A</h3>
              <p className="text-md -mt-1 text-gray-600 ml-5">
                Vyankatesh Galli Ajara, 416505
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center border-b-2 pb-2">
            <MdOutlineMyLocation />
            <div>
              <h3 className="text-lg font-medium ml-5">192 A wing</h3>
              <p className="text-md -mt-1 text-gray-600 ml-5">
                Viraj PG, Viman nagar, pune. 416505
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center ">
            <BsCash />
            <div>
              <p className="text-lg ml-5 text-gray-600">Cash</p>
              <h3 className="text-2xl ml-5 font-medium">₹ 109.20</h3>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <div
            className="flex mt-5 flex-col gap-2 justify-center"
            onPaste={handlePaste}
          >
            <h4 className="text-lg font-medium">Enter OTP to Confirm Ride</h4>
            <div className="flex items-center justify-center gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputs.current[index] = el)}
                  className="w-12 h-12 text-center text-lg font-semibold border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="mt-5 w-full p-2 text-white text-lg bg-gray-900 font-semibold rounded-lg "
          >
            Pick Up
          </button>
        </form>
        <button
          className="  w-full p-2 text-gray-900  text-lg bg-gray-300 font-semibold rounded-lg"
          onClick={() => {
            setconfirmridepopup(false);
            setridepopuppanel(false);
          }}
        >
          Cancle Ride
        </button>
      </div>
    </div>
  );
}

export default ConfirmRidePopup;

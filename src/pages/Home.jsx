import React from "react";
import UberLogo from "../assets/Uber-Logo.png";
import homeBg from "../assets/homeBg.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function handleRedirect() {
    localStorage.getItem("token") ? navigate("/user-home") : navigate("/login");
  }
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${homeBg})` }}
        className="bg-cover bg-center h-screen pt-5 w-full flex justify-between flex-col"
      >
        <img className="w-16 ml-8" src={UberLogo} alt="Uber Logo" />
        <div className="bg-white pb-7 py-4 px-10">
          <h2 className="text-3xl font-bold">Get started with Uber</h2>

          <button
            className="w-full bg-black text-white py-3 rounded mt-4"
            onClick={handleRedirect}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

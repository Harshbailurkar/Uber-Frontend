import React, { useContext } from "react";
import UberLogo from "../assets/uber-logo.png";
import { Link } from "react-router-dom";
import { useActionState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import { registerCaptain } from "../API/captainAPI.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCaptain } from "../redux/Slices/captainSlice.js";
function CaptainRegister() {
  const [state, actionFunction, isPending] = useActionState(formAction, {
    error: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    vechicalType: "",
    vehicalCapacity: "",
    vehicalColor: "",
    vehicalPlate: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function formAction(prevState, FormData) {
    const data = {
      firstName: FormData.get("first_name"),
      lastName: FormData.get("last_name"),
      email: FormData.get("email"),
      password: FormData.get("password"),
      vechicalType: FormData.get("vehicle_Type"),
      vehicalCapacity: FormData.get("vehicle_capacity"),
      vehicalColor: FormData.get("vehicle_color"),
      vehicalPlate: FormData.get("vehicle_number"),
    };

    await registerCaptain(data)
      .then((res) => {
        dispatch(
          setCaptain({
            email: data.email,
            fullName: {
              firstName: data.firstName,
              lastName: data.lastName,
            },
            vehical: {
              color: data.vehicalColor,
              plate: data.vehicalPlate,
              capacity: data.vehicalCapacity,
              vehicleType: data.vechicalType,
            },
          })
        );

        localStorage.setItem("token", res.data.accessToken);
        navigate("/captain-home");
      })
      .catch((error) => {
        state.error = error.message;
      });

    return data;
  }

  console.log(state);

  function SubmitBtn() {
    const { pending, data } = useFormStatus();
    return (
      <div>
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-black text-white py-2 px-4 rounded font-semibold mt-4 text-lg"
        >
          {pending ? "Creating..." : "Create Account"}
        </button>
      </div>
    );
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <div className="flex">
          <img className="w-16 mb-10 mr-2" src={UberLogo} alt="" />
          <h2 className="mr-4 font-bold">Captain</h2>
        </div>
        <form action={actionFunction}>
          <h3 className="text-lg font-medium mb-2">What's your Name</h3>
          <div className="flex justify-between gap-4 mb-3">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base ml-1"
              type="text"
              required
              name="first_name"
              placeholder="First Name"
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              required
              name="last_name"
              placeholder="Last Name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-3"
            type="email"
            required
            name="email"
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2 ">Enter password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base mb-3"
            type="password"
            required
            name="password"
            placeholder="password"
          />
          <h3 className="text-lg font-medium mb-2">
            Information About Your Vehicle
          </h3>
          <div className="flex justify-between gap-4 mb-3">
            <select
              name="vehicle_Type"
              id="vehicleType"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg ml-1"
            >
              <option value="" disabled selected className="text-gray-400">
                Vehicle type
              </option>

              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="auto">Auto</option>
            </select>
            <input
              type="number"
              name="vehicle_capacity"
              placeholder="Vehicle Capacity"
              required
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
            />
          </div>
          <div className="flex justify-between gap-4 mb-3">
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base ml-1"
              type="text"
              required
              name="vehicle_color"
              placeholder="vehicle color"
            />
            <input
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base"
              type="text"
              required
              name="vehicle_number"
              placeholder="Vehicle Number"
            />
          </div>
          <SubmitBtn />
          <p className="text-center mt-3 ">
            Already have account?{" "}
            <Link className="text-blue-600" to="/captain-login">
              login here
            </Link>{" "}
          </p>
        </form>
      </div>
      <div className="mt-3">
        <p className="text-xs leading-tight">
          By proceeding, I agree that Uber or its representatives may contact me
          by email, phone, or SMS at the email address or number I provide,I
          have read and understand the relevant{" "}
          <a href="#" className="text-blue-600">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default CaptainRegister;

import React from "react";
import UberLogo from "../assets/uber-logo.png";
import { Link } from "react-router-dom";
import { useActionState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import { registerUser } from "../API/userAPI.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/Slices/userSlice.js";

function UserRegister() {
  const [state, actionFunction, isPending] = useActionState(formAction, {
    error: null,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  async function formAction(prevState, FormData) {
    const data = {
      firstName: FormData.get("first_name"),
      lastName: FormData.get("last_name"),
      email: FormData.get("email"),
      password: FormData.get("password"),
    };

    await registerUser(data).then((res) => {
      navigate("/user-home");
      dispatch(
        setUser({
          email: data.email,
          fullName: {
            firstName: data.firstName,
            lastName: data.lastName,
          },
        })
      );
      localStorage.setItem("token", res.data.accessToken);
    });
    return data;
  }

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
        <img className="w-16 mb-10" src={UberLogo} alt="" />
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
          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            required
            name="password"
            placeholder="password"
          />
          <SubmitBtn />
          <p className="text-center mt-3 ">
            Already have account?{" "}
            <Link className="text-blue-600" to="/login">
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

export default UserRegister;

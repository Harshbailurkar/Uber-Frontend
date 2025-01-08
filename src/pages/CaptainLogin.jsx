import React, { useContext } from "react";
import { useActionState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import UberLogo from "../assets/uber-logo.png";
import { Link } from "react-router-dom";
import { loginCaptain } from "../API/captainAPI";
import { useNavigate } from "react-router-dom";

function CaptainLogin() {
  const [state, actionFunction, isPending] = useActionState(formAction, {
    error: null,
    email: "",
    password: "",
  });
  const Navigate = useNavigate();

  async function formAction(prevState, FormData) {
    const data = {
      email: FormData.get("email"),
      password: FormData.get("password"),
    };
    await loginCaptain(data)
      .then((res) => {
        localStorage.setItem("ctoken", res.data.accessToken);
        localStorage.setItem("captainId", res.data.captain._id);
        Navigate("/captain-home");
      })
      .catch((error) => {
        localStorage.removeItem("ctoken");
        state.error = error.message;
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
          {pending ? "Logging in..." : "Login"}
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
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] rounded px-4 py-2 border w-full text-lg placeholder:text-base"
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
            Join a fleet?{" "}
            <Link className="text-blue-600" to="/captain-register">
              Register as Captain
            </Link>{" "}
          </p>
        </form>
      </div>
      <div className="mt-3">
        <Link to="/login">
          <button className="bg-[#e89631] hover:bg-[#e88331] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg ">
            Sign in as User
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CaptainLogin;

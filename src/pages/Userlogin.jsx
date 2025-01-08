import React, { useContext } from "react";
import UberLogo from "../assets/uber-logo.png";
import { Link } from "react-router-dom";
import { useActionState, useOptimistic } from "react";
import { useFormStatus } from "react-dom";
import { loginUser } from "../API/userAPI.js";
import { useNavigate } from "react-router-dom";

function Userlogin() {
  const [state, actionFunction, isPending] = useActionState(formAction, {
    error: null,
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  async function formAction(prevState, FormData) {
    const data = {
      email: FormData.get("email"),
      password: FormData.get("password"),
    };
    try {
      await loginUser(data)
        .then((res) => {
          localStorage.setItem("token", res.data.accessToken);
          localStorage.setItem("userId", res.data.user._id);
          navigate("/user-home");
        })
        .catch((error) => {
          state.error = error;
        });
    } catch (error) {
      state.error = error;
    }

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
        <img className="w-16 mb-10" src={UberLogo} alt="" />
        {state.error && (
          <p className="text-red-500 text-center">{state.error}</p>
        )}
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
            New Here?{" "}
            <Link className="text-blue-600" to="/register">
              create new Account
            </Link>{" "}
          </p>
        </form>
      </div>
      <div className="mt-3">
        <Link to="/captain-login">
          <button className="bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg ">
            Sign in as Captain
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Userlogin;

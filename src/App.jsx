import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import Userlogin from "./pages/Userlogin";
import CaptainRegister from "./pages/CaptainRegister";
import Captainlogin from "./pages/Captainlogin";
import UserHome from "./pages/UserHome";
import CaptainHome from "./pages/captainHome";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserProfile from "./pages/UserProfile";
import Riding from "./pages/Riding";
import CaptainProtectedWrapper from "./pages/CaptainProtectedWrapper";
import CaptainProfile from "./pages/CaptainProfile";
import CaptainRiding from "./pages/CaptainRiding";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/login" element={<Userlogin />} />
        <Route path="/captain-register" element={<CaptainRegister />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route element={<UserProtectedWrapper />}>
          <Route path="/user-home" element={<UserHome />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/riding" element={<Riding />} />
        </Route>
        <Route element={<CaptainProtectedWrapper />}>
          <Route path="/captain-home" element={<CaptainHome />} />
          <Route path="/captain-profile" element={<CaptainProfile />} />
          <Route path="/captain-riding" element={<CaptainRiding />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserRegister from "./pages/UserRegister";
import Userlogin from "./pages/Userlogin";
import CaptainRegister from "./pages/CaptainRegister";
import Captainlogin from "./pages/Captainlogin";
import UserHome from "./pages/UserHome";
import CaptainHome from "./pages/CaptainHome";
import UserProtectedWrapper from "./pages/UserProtectedWrapper";
import UserProfile from "./pages/UserProfile";
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
          <Route path="/captain-home" element={<CaptainHome />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;

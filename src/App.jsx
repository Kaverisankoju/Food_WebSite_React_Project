import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavSimple from "./Components/NavSimple";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();

  const path = location?.pathname || "";

  // Hide navbar on login & signup
  const hideNavbar =
    path === "/login" || path === "/signup" || path === "/";

  return (
    <div>
      {/* Navbar hidden for login/signup */}
      {!hideNavbar && <NavSimple />}

      <Routes>
        {/* Default open page */}
        <Route path="/" element={<Login />} />

        <Route path="/landing" element={<Landing />} />
        <Route path="/menu" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;

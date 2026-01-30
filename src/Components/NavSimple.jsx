import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import food_logo from "../assets/food_logo.png";

function NavSimple() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // logout user
    navigate("/login"); // redirect to login page
  };

  return (
    <div className="w-full h-[70px] flex items-center justify-between px-8 bg-slate-200 shadow-md">

      {/* Left Side */}
      <div className="flex items-center">

        {/* Logo */}
        <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl mr-6">
          <img
            src={food_logo}
            className="w-[70px] h-[70px] object-contain"
            alt="logo"
          />
        </div>

        {/* Links */}
        <div className="flex gap-8 font-semibold text-gray-600">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border-b-2 border-green-600"
                : "hover:text-green-500"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/menu"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border-b-2 border-green-600"
                : "hover:text-green-500"
            }
          >
            Menu
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border-b-2 border-green-600"
                : "hover:text-green-500"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 border-b-2 border-green-600"
                : "hover:text-green-500"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>

      {/* Right Side Logout */}
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>

    </div>
  );
}

export default NavSimple;

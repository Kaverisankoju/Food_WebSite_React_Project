import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import food_logo from "../assets/food_logo.png";
import { HiMenu, HiX } from "react-icons/hi";

function NavSimple() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-green-600 border-b-2 border-green-600"
      : "hover:text-green-500";

  return (
    <div className="w-full bg-slate-200 shadow-md px-4 md:px-8">

      {/* Top Bar */}
      <div className="h-[70px] flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">

          {/* Logo */}
          <div className="w-[50px] h-[50px] bg-white flex justify-center items-center rounded-md shadow-xl">
            <img
              src={food_logo}
              className="w-full h-full object-contain"
              alt="logo"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 font-semibold text-gray-600">
            <NavLink to="/landing" className={linkClass}>Home</NavLink>
            <NavLink to="/menu" className={linkClass}>Menu</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </div>
        </div>

        {/* Desktop Logout */}
        <button
          onClick={handleLogout}
          className="hidden md:block bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-green-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 py-4 font-semibold text-gray-600">
          <NavLink to="/landing" className={linkClass} onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/menu" className={linkClass} onClick={() => setOpen(false)}>Menu</NavLink>
          <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>Contact</NavLink>

          <button
            onClick={handleLogout}
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition w-fit"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}

export default NavSimple;

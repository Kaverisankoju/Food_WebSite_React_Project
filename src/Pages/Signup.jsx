import React, { useState } from "react";
import { saveUser } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import signup_bg from "../assets/signup_bg.jpg";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  // Name: only letters & spaces
  const nameRegex = /^[A-Za-z ]{3,}$/;

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Strong password
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

  const handleSignup = () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required!");
      return;
    }

    if (!nameRegex.test(form.name)) {
      alert("Name must contain only letters and be at least 3 characters.");
      return;
    }

    if (!emailRegex.test(form.email)) {
      alert("Enter a valid email address.");
      return;
    }

    if (!passwordRegex.test(form.password)) {
      alert(
        "Password must contain uppercase, lowercase, number, special character and be at least 8 characters."
      );
      return;
    }

    saveUser(form);
    alert("Signup successful. Please login.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${signup_bg})`}}>
      <div className="bg-white/40 backdrop-blur-md p-10 rounded-xl shadow-xl w-[450px]">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create Account
        </h2>

        <input
          placeholder="Name"
          className="input w-full"
          onChange={e =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          placeholder="Email"
          className="input mt-3 w-full"
          onChange={e =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <div className="relative mt-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input w-full pr-10"
            onChange={e =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <span
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <button
          onClick={handleSignup}
          className="w-full bg-green-500 text-white p-2 mt-5 rounded-lg"
        >
          Signup
        </button>

        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;

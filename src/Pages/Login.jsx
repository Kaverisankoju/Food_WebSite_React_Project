import React, { useState } from "react";
import { loginUser, setCurrentUser } from "../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import signup_bg from "../assets/signup_bg.jpg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleLogin = () => {
    if (!email || !password) {
      alert("All fields are required!");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Enter a valid email address.");
      return;
    }

    const user = loginUser(email, password);

    if (!user) {
      alert("User not found. Signup first.");
      return;
    }

    setCurrentUser(user);
    navigate("/menu");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${signup_bg})`}}>
      <div className="bg-white/40 backdrop-blur-md p-10 rounded-xl shadow-xl w-[450px]">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Login
        </h2>

        <input
          placeholder="Email"
          className="input w-full"
          onChange={e => setEmail(e.target.value)}
        />

        {/* Password with eye toggle */}
        <div className="relative mt-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input w-full pr-10"
            onChange={e => setPassword(e.target.value)}
          />

          <span
            className="absolute right-3 top-3 cursor-pointer text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white p-2 mt-5 rounded-lg"
        >
          Login
        </button>

        <p className="text-center mt-4">
          New user?{" "}
          <Link to="/signup" className="text-green-600 font-semibold">
            Signup here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

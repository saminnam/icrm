import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logos/logo-gold.png"
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });
      setError("");
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        setError(
          error.response.data.message || "An error occurred. Please try again."
        );
      } else {
        console.error("Error:", error.message);
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen w-full">
        <div className="lg:w-[470px] shadow w-full mx-12 bg-[#F8F9FB] rounded-lg overflow-hidden">
          <div className="bg-black flex justify-center flex-col items-center py-3 text-white text-center">
            <img
              src={logo}
              alt="logo"
              className="w-[120px] mb-2"
            />
            <p className="text-[#969B86]">Welcome back! Sign in to continue</p>
          </div>
          <div className="p-5">
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="text-red-600 bg-red-100 border border-red-300 px-3 py-2 rounded mb-2">
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-1 mt-2">
                <label htmlFor="username" className="text-[#666861] font-semibold">
                  Username
                </label>
                <input
                  type="text"
                  className="bg-gray-50 py-2 px-3 text-sm border border-gray-400 rounded"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1 mt-2">
                <label htmlFor="password" className="text-[#666861] font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="bg-gray-50 py-2 px-3 text-sm border border-gray-400 rounded"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-2 text-sm my-4">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                      className="sr-only"
                      id="rememberMe"
                    />
                    <div
                      className={`block h-6 w-10 rounded-full transition-colors ${
                        isChecked ? "bg-blue-500" : "bg-black"
                      }`}
                    ></div>
                    <div
                      className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform transform ${
                        isChecked ? "translate-x-full" : ""
                      }`}
                    ></div>
                  </div>
                  <span className="ml-3 text-[#666861]">Remember me</span>
                </label>
              </div>

              <button
                type="submit"
                className="bg-[#3F51B5] cursor-pointer hover:bg-white hover:text-[#3F51B5] transition-all duration-200 border font-bold border-[#3F51B5] mb-5 mt-2 py-2 text-white w-full rounded"
              >
                Log In <i class="fa-solid fa-right-to-bracket"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

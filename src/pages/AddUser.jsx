import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import BreadCrumbs from "../components/BreadCrumbs";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    userAccess: "",
    password: "",
  });
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [passwordError, setPasswordError] = useState("");

  const userAccess = [
    { value: "", label: "Select User Access" },
    { value: "proma&invoice_access", label: "Access Proma & Invoice" },
    { value: "proma_invoice_access", label: "Access Proma Invoice" }, // Unique value
    { value: "access_invoice", label: "Access Invoice" },
    { value: "access_admin", label: "Access Admin" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "password") {
      checkPasswordStrength(value);
    }
  };

  const checkPasswordStrength = (password) => {
    let strength = 0;
    let errors = [];

    if (password.length >= 8) {
      strength += 20;
    } else {
      errors.push("Password must be at least 8 characters long.");
    }
    if (/[A-Z]/.test(password)) {
      strength += 20;
    } else {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter.");
    } else {
      strength += 20;
    }
    if (/[0-9]/.test(password)) {
      strength += 20;
    } else {
      errors.push("Password must contain at least one number.");
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      strength += 20;
    } else {
      errors.push("Password must contain at least one special character.");
    }

    setPasswordStrength(Math.min(100, strength));

    if (errors.length > 0) {
      setPasswordError(errors.join(" "));
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordStrength < 100 || passwordError) {
      alert(
        "Please ensure the password meets all requirements for a strong password."
      );
      return;
    }

    console.log("Form submitted with data:", formData);
    alert("User Created (check console for data)");

    setFormData({
      name: "",
      email: "",
      phone: "",
      userAccess: "",
      password: "",
    });
    setPasswordStrength(0);
    setPasswordError("");
  };

  const getProgressBarColor = () => {
    if (passwordStrength < 40) {
      return "bg-red-500";
    } else if (passwordStrength < 80) {
      return "bg-yellow-500";
    } else {
      return "bg-green-500";
    }
  };

  return (
    <section className="flex-1 p-6">
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-300">
        <PageTitle pageTitle={"Add User"} />
        <BreadCrumbs pageName={"user-list"} />
      </div>
      <div className="bg-white border-2 border-gray-300 rounded shadow relative w-full">
        <div className="flex p-5 items-start border-b-2 border-gray-300 justify-between">
          <h3 className="text-xl font-semibold">User Information</h3>
        </div>

        <div className="p-6 space-y-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Enter Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="userAccess"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  User Access
                </label>
                <select
                  name="userAccess"
                  id="userAccess"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  value={formData.userAccess}
                  onChange={handleChange}
                  required
                >
                  {userAccess.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      disabled={option.value === ""}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-gray-900 block mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                {formData.password && (
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                      <div
                        className={`h-2.5 rounded-full transition-all duration-300 ease-in-out ${getProgressBarColor()}`}
                        style={{ width: `${passwordStrength}%` }}
                      ></div>
                    </div>
                    {passwordError && (
                      <p className="text-red-500 text-sm mt-1">
                        {passwordError}
                      </p>
                    )}
                  </div>
                )}
              </div>
              <div className="mt-6 border-t col-span-6 sm:col-span-3 border-gray-200 rounded">
                <button
                  className="text-white bg-blue-700 hover:bg-blue-900 cursor-pointer font-medium rounded text-sm px-5 py-2.5 text-center"
                  type="submit"
                >
                  Create User
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddUser;

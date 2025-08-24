import React, { useEffect, useState } from "react";
import BreadCrumbs from "../components/BreadCrumbs";
// import { LuRefreshCw } from "react-icons/lu";
import PageTitle from "../components/PageTitle";
import {
  addCustomer,
  setEditingItem,
  resetForm,
  setName,
  setEmail,
  setPrimaryAddress,
  setSecondaryAddress,
  setCity,
  setCountry,
  setPostcode,
  setNumber,
  setGstNumber,
  setShippingCsName,
  setShippingCsEmail,
  setShipingPrimaryAddress,
  setShipingSecondaryAddress,
  setShipingCountry,
  setShipingPostcode,
} from "../Redux/Actions/CustomerFormAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { API_BASE_URL } from "../components/Api";

const AddCustomers = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const {
    customers,
    name,
    email,
    primary_address,
    secondary_address,
    city,
    country,
    postcode,
    phoneNumber,
    gstNumber,
    shippingName,
    shippingEmail,
    shippingPrimaryAddress,
    shippingSecondaryAddress,
    shippingCountry,
    shippingPostcode,
  } = useSelector((state) => state.customersInfo);

  const fetchCustomerData = () => {
    axios
      .get(`${API_BASE_URL}store_customers`)
      .then((res) => {
        dispatch(addCustomer(res.data));
      })
      .catch((error) => {
        console.error("Error fetching customer data");
      });
  };

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Please enter the name";
    if (!email.trim()) newErrors.email = "Please enter the email";
    if (!primary_address.trim())
      newErrors.primary_address = "Please enter the primary address";
    if (!secondary_address.trim())
      newErrors.secondary_address = "Please enter the secondary address";
    if (!city.trim()) newErrors.city = "Please enter the city name";
    if (!country.trim()) newErrors.country = "Please enter the country name";
    if (!postcode.trim()) newErrors.postcode = "Please enter the postcode";
    if (!phoneNumber.trim())
      newErrors.phoneNumber = "Please enter the phone number";
    if (!gstNumber.trim()) newErrors.gstNumber = "Please enter the GST number";
    if (!shippingName.trim()) newErrors.shippingName = "Please enter the name";
    if (!shippingEmail.trim())
      newErrors.shippingEmail = "Please enter the email";
    if (!shippingPrimaryAddress.trim())
      newErrors.shippingPrimaryAddress = "Please enter the primary address";
    if (!shippingSecondaryAddress.trim())
      newErrors.shippingSecondaryAddress = "Please enter the secondary address";
    if (!shippingCountry.trim())
      newErrors.shippingCountry = "Please enter the country";
    if (!shippingPostcode.trim())
      newErrors.shippingPostcode = "Please enter the postcode";

    return newErrors;
  };

  const handleNameChange = () => {
    if (/^[a-zA-Z\s]*$/.test(value)) {
      dispatch(setName(value));
      setErrors((prev) => ({ ...prev, name }));
    } else {
      setErrors((prev) => ({
        ...prev,
        name: "Please enter the valid name",
      }));
    }
  };
  const handleEmailChange = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      dispatch(setEmail(value));
      setErrors((prev) => ({ ...prev, email }));
    } else {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter the valid email",
      }));
    }
  };
  const handlePrimaryAddressChange = (value) => {
    dispatch(setPrimaryAddress(value));
    setErrors((prev) => ({ ...prev, primary_address: "" }));
  };

  const handleSecondaryAddressChange = (value) => {
    dispatch(setSecondaryAddress(value));
    setErrors((prev) => ({ ...prev, secondary_address: "" }));
  };
  const handleCityChange = (value) => {
    dispatch(setCity(value));
    setErrors((prev) => ({ ...prev, city: "" }));
  };
  const handleCountryChange = (value) => {
    dispatch(setCountry(value));
    setErrors((prev) => ({ ...prev, country: "" }));
  };
  const handlePostcodeChange = (value) => {
    dispatch(setPostcode(value));
    setErrors((prev) => ({ ...prev, postcode: "" }));
  };

  const handleNumberChange = (value) => {
    if (/^\d+$/.test(value)) {
      dispatch(setNumber(value));
      setErrors((prev) => ({ ...prev, phoneNumber: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: "Please enter the valid phone number",
      }));
    }
  };

  const handleGstNumberChange = (value) => {
    if (
      /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)
    ) {
      dispatch(setGstNumber(value));
      setErrors((prev) => ({ ...prev, gstNumber: "" }));
    } else {
      setErrors((prev) => ({
        ...prev,
        gstNumber: "Please enter the valid GST number",
      }));
    }
  };

  const handleShippingNameChange = () => {
    if (/^[a-zA-Z\s]*$/.test(value)) {
      dispatch(setShippingCsName(value));
      setErrors((prev) => ({ ...prev, shippingName }));
    } else {
      setErrors((prev) => ({
        ...prev,
        shippingName: "Please enter the valid name",
      }));
    }
  };
  const handleShippingEmailChange = () => {
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      dispatch(setShippingCsEmail(value));
      setErrors((prev) => ({ ...prev, shippingEmail }));
    } else {
      setErrors((prev) => ({
        ...prev,
        shippingEmail: "Please enter the valid email",
      }));
    }
  };
  const handleShippingPrimaryAddressChange = (value) => {
    dispatch(setShipingPrimaryAddress(value));
    setErrors((prev) => ({ ...prev, shippingPrimaryAddress: "" }));
  };

  const handleShippingSecondaryAddressChange = (value) => {
    dispatch(setShipingSecondaryAddress(value));
    setErrors((prev) => ({ ...prev, secondary_address: "" }));
  };

  const handleShippingCountryChange = (value) => {
    dispatch(setShipingCountry(value));
    setErrors((prev) => ({ ...prev, shippingCountry: "" }));
  };

  const handleShippingPostcodeChange = (value) => {
    dispatch(setShipingPostcode(value));
    setErrors((prev) => ({ ...prev, shippingPostcode: "" }));
  };

  const handleSubmit = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const formDataObj = new FormData();
    formDataObj.append("name", name);
    formDataObj.append("email", email);
    formDataObj.append("primary_address", primary_address);
    formDataObj.append("secondary_address", secondary_address);
    formDataObj.append("city", city);
    formDataObj.append("country", country);
    formDataObj.append("postcode", postcode);
    formDataObj.append("phoneNumber", phoneNumber);
    formDataObj.append("gstNumber", gstNumber);
  };

  return (
    <section className="flex-1 p-5">
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-300">
        <PageTitle pageTitle={"Add Customer"} />
        <BreadCrumbs pageName={"customer-list"} />
      </div>
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="bg-white border-2 border-gray-300 rounded shadow relative w-full">
          <div className="flex p-5 items-start border-b-2 border-gray-300 justify-between">
            <h3 className="text-xl font-semibold">Customer Information</h3>
            {/* <button
              type="button"
              className="text-gray-400 cursor-pointer text-xl bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded p-1.5 ml-auto inline-flex items-center"
            >
              <LuRefreshCw />
            </button> */}
          </div>

          <div className="p-6 space-y-6">
            <div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">{errors.name}</p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Email"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Primary Address
                  </label>
                  <input
                    type="text"
                    name="primary_address"
                    value={primary_address}
                    onChange={(e) => handlePrimaryAddressChange(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                  />
                  {errors.primary_address && (
                    <p className="text-red-500 text-sm">
                      {errors.primary_address}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Secondary Address
                  </label>
                  <input
                    type="text"
                    name="secondary_address"
                    value={secondary_address}
                    onChange={(e) =>
                      handleSecondaryAddressChange(e.target.value)
                    }
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                  />
                  {errors.secondary_address && (
                    <p className="text-red-500 text-sm">
                      {errors.secondary_address}
                    </p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Town / City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => handleCityChange(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Town / City"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-sm">{errors.city}</p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={country}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Country"
                  />
                  {errors.country && (
                    <p className="text-red-500 text-sm">{errors.country}</p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Postcode
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={postcode}
                    onChange={(e) => handlePostcodeChange(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Postcode"
                  />
                  {errors.postcode && (
                    <p className="text-red-500 text-sm">{errors.postcode}</p>
                  )}
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => handleNumberChange(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Number"
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                  )}
                </div>
                <div className="col-span-6">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    GST Number
                  </label>
                  <input
                    type="number"
                    name="gstNumber"
                    value={gstNumber}
                    onChange={(e) => handleGstNumberChange(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter GST Number"
                  />
                  {errors.gstNumber && (
                    <p className="text-red-500 text-sm">{errors.gstNumber}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border-2 border-gray-300 rounded shadow relative w-full">
          <div className="flex p-5 items-start border-b-2 border-gray-300 justify-between">
            <h3 className="text-xl font-semibold">Shipping Information</h3>
            {/* <button
              type="button"
              className="text-gray-400 text-xl cursor-pointer bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded p-1.5 ml-auto inline-flex items-center"
            >
              <LuRefreshCw />
            </button> */}
          </div>

          <div className="p-6 space-y-6">
            <div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="shippingName"
                    value={shippingName}
                    onChange={(e) => handleShippingNameChange(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    name="shippingEmail"
                    value={shippingEmail}
                    onChange={(e) => handleShippingEmailChange(e.target.value)}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Primary Address
                  </label>
                  <input
                    type="text"
                    name="shippingPrimaryAddress"
                    value={shippingPrimaryAddress}
                    onChange={(e) =>
                      handleShippingPrimaryAddressChange(e.target.value)
                    }
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Secondary Address
                  </label>
                  <input
                    type="text"
                    name="secondary_address"
                    value={secondary_address}
                    onChange={(e) =>
                      handleShippingSecondaryAddressChange(e.target.value)
                    }
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="shippingCountry"
                    value={shippingCountry}
                    onChange={(e) =>
                      handleShippingCountryChange(e.target.value)
                    }
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Country"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Postcode
                  </label>
                  <input
                    type="text"
                    name="shippingPostcode"
                    value={shippingPostcode}
                    onChange={(e) =>
                      handleShippingPostcodeChange(e.target.value)
                    }
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Postcode"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 border-t border-gray-200 rounded">
            <button
              className="text-white bg-blue-700 hover:bg-blue-900 cursor-pointer font-medium rounded text-sm px-5 py-2.5 text-center"
              type="submit"
              onClick={handleSubmit}
            >
              Create Customer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddCustomers;

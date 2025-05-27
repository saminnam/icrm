import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import { LuRefreshCw } from "react-icons/lu";
import PageTitle from "../components/PageTitle";

const AddCustomers = () => {
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
            <form>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="customer-name"
                    id="customer-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Name"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Email"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Primary Address
                  </label>
                  <input
                    type="text"
                    name="primary-address"
                    id="primary-address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Secondary Address
                  </label>
                  <input
                    type="text"
                    name="secondary-address"
                    id="secondary-address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Town / City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Town / City"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Country"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Postcode
                  </label>
                  <input
                    type="number"
                    name="postcode"
                    id="postcode"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Postcode"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="number"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Number"
                    required=""
                  />
                </div>
              </div>
            </form>
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
            <form>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="customer-name"
                    id="customer-name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Name"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Email"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Primary Address
                  </label>
                  <input
                    type="text"
                    name="primary-address"
                    id="primary-address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Secondary Address
                  </label>
                  <input
                    type="text"
                    name="secondary-address"
                    id="secondary-address"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Address"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Town / City"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    className="text-sm font-medium text-gray-900 block mb-2"
                  >
                    Postcode
                  </label>
                  <input
                    type="number"
                    name="postcode"
                    id="postcode"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Country"
                    required=""
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="p-6 border-t border-gray-200 rounded">
            <button
              className="text-white bg-blue-700 hover:bg-blue-900 cursor-pointer font-medium rounded text-sm px-5 py-2.5 text-center"
              type="submit"
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

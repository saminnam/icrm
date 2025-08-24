import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import BreadCrumbs from "../components/BreadCrumbs";
import CustomerDataPopup from "../modalPopup/CustomerDataPopup";
import TextEditor from "../components/TextEditor";

const CreateProforma = () => {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <section className="flex-1 p-5">
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-300">
        <PageTitle pageTitle={"Create New Proforma Invoice"} />
        <BreadCrumbs pageName={"proforma-list"} />
      </div>
      {openPopup && (
        <CustomerDataPopup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      )}
      <div className="bg-white border-2 border-gray-300 rounded shadow relative w-full">
        <div className="p-6 space-y-6">
          <form>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Select Type
                </label>
                <select disabled className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm w-full p-2.5">
                  <option value="Proforma Invoice">Proforma Invoice</option>
                </select>
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Invoice Date
                </label>
                <input
                  type="date"
                  name="invoice-date"
                  id="invoice-date"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  Due Date
                </label>
                <input
                  type="date"
                  name="due-date"
                  id="due-date"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">
                  #PI
                </label>
                <input
                  type="number"
                  name="number"
                  id="number"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                  placeholder="#PI"
                  required=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col gap-5 mt-10">
        <div className="bg-white border-2 border-gray-300 rounded shadow relative w-full">
          <div className="flex p-5 items-center border-b-2 border-gray-300 justify-between">
            <h3 className="text-xl font-semibold">Customer Information</h3>
            <button
              className="text-blue-700 cursor-pointer font-semibold"
              onClick={() => setOpenPopup(true)}
            >
              (OR) Select Existing Customer
            </button>
          </div>
          <div className="p-6 space-y-6">
            <form>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
          </div>
          <div className="p-6 space-y-6">
            <form>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
                  <label className="text-sm font-medium text-gray-900 block mb-2">
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
      <TextEditor />
    </section>
  );
};

export default CreateProforma;

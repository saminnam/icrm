import React from "react";
import BreadCrumbs from "../components/BreadCrumbs";
import PageTitle from "../components/PageTitle";

const AddProducts = () => {
  return (
    <section className="p-5">
      <div className="pb-2 flex items-center justify-between border-b-2 mb-4 border-gray-300">
        <PageTitle pageTitle={"Add Product"} />
        <BreadCrumbs pageName={"product-list"} />
      </div>
      <div className="flex lg:flex-row flex-col gap-5">
        <div className="bg-white border-2 border-gray-300 rounded shadow relative w-full">
          <div className="flex p-5 items-start border-b-2 border-gray-300 justify-between">
            <h3 className="text-xl font-semibold">Product Information</h3>
          </div>
          <div className="p-6 space-y-6">
            <form>
              <div className="grid grid-cols-6 gap-6 items-center">
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
                    Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Description"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="text-sm font-medium text-gray-900 block mb-2">
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    id="price"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                    placeholder="Enter Price"
                    required=""
                  />
                </div>
                <div className="col-span-6 sm:col-span-3 rounded mt-5">
                  <button
                    className="text-white bg-blue-700 hover:bg-blue-900 cursor-pointer font-medium rounded text-sm px-5 py-2.5 text-center"
                    type="submit"
                  >
                    Create Customer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="w-full bg-white border-2 border-gray-300 shadow">

        </div>
      </div>
    </section>
  );
};

export default AddProducts;

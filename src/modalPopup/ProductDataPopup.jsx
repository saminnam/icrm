import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { API_BASE_URL } from "../components/Api";
import { IoSearchOutline } from "react-icons/io5";

const ProductDataPopup = ({ openPopup, setOpenPopup }) => {
  // const [customers, setCustomers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [searchTerm, setSearchTerm] = useState("");
  // const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  // const [currentPage, setCurrentPage] = useState(1);
  // const [customersPerPage] = useState(10);
  const [animateIn, setAnimateIn] = useState(false);

  // const fetchCustomer = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await axios.get(`${API_BASE_URL}store_customers`);
  //     setCustomers(res.data.data);
  //     console.log(res.data);
  //   } catch (err) {
  //     console.error("Failed to fetch data:", err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    if (openPopup) {
      // fetchCustomer();
      const timer = setTimeout(() => {
        setAnimateIn(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
    }
  }, [openPopup]);

  // const filteredCustomers = useMemo(() => {
  //   return customers.filter(
  //     (customer) =>
  //       String(customer.name || "")
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase()) ||
  //       String(customer.phone || "")
  //         .toLowerCase()
  //         .includes(searchTerm.toLowerCase())
  //   );
  // }, [customers, searchTerm]);

  // const sortedCustomers = useMemo(() => {
  //   let sortableCustomers = [...filteredCustomers];
  //   if (sortConfig.key) {
  //     sortableCustomers.sort((a, b) => {
  //       if (a[sortConfig.key] < b[sortConfig.key]) {
  //         return sortConfig.direction === "ascending" ? -1 : 1;
  //       }
  //       if (a[sortConfig.key] > b[sortConfig.key]) {
  //         return sortConfig.direction === "ascending" ? 1 : -1;
  //       }
  //       return 0;
  //     });
  //   }
  //   return sortableCustomers;
  // }, [filteredCustomers, sortConfig]);

  // const requestSort = (key) => {
  //   let direction = "ascending";
  //   if (sortConfig.key === key && sortConfig.direction === "ascending") {
  //     direction = "descending";
  //   }
  //   setSortConfig({ key, direction });
  // };

  // const indexOfLastCustomer = currentPage * customersPerPage;
  // const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  // const currentCustomers = sortedCustomers.slice(
  //   indexOfFirstCustomer,
  //   indexOfLastCustomer
  // );

  // const totalPages = Math.ceil(sortedCustomers.length / customersPerPage);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const getSortIndicator = (key) => {
  //   if (sortConfig.key !== key) return null;

  //   return sortConfig.direction === "ascending" ? (
  //     <FaArrowUp className="ml-1" />
  //   ) : (
  //     <FaArrowDown className="ml-1" />
  //   );
  // };

  if (!openPopup) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div
        className={`bg-white p-6 rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] flex flex-col
          transform transition-all duration-500 ease-out
          ${
            animateIn
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-full"
          }`}
      >
        <div className="flex justify-between items-center border-b border-gray-300 pb-3 mb-4">
          <h2 className="text-2xl font-semibold text-gray-600">
            Select An Existing Product
          </h2>
          <button
            onClick={() => setOpenPopup(false)}
            className="text-gray-500 cursor-pointer hover:text-gray-700 text-3xl font-bold leading-none"
          >
            &times;
          </button>
        </div>
        <div className="flex-grow overflow-hidden">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden border rounded border-gray-300">
              {/* {loading ? (
                <div className="text-center p-4 text-gray-600">
                  Loading customers...
                </div>
              ) : ( */}
              <div className="relative">
                <div className="overflow-x-auto max-h-[50vh]">
                  <table className="table-auto min-w-full rounded">
                    <thead className="sticky top-0 bg-gray-50 z-10">
                      <tr>
                        <th
                          scope="col"
                          className="p-3 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize cursor-pointer"
                        >
                          Products
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px] cursor-pointer"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px] cursor-pointer"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px] cursor-pointer"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                      <tr className="bg-white hover:bg-blue-50 transition-all duration-300 cursor-pointer">
                        <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          Temp1
                        </td>
                        <td className="p-3 text-justify text-sm leading-6 font-medium text-gray-900">
                          36 creatives, 6 slider videos, 12 campaigns, Facebook
                          and Instagram Page Maintenance, Youtube, Google
                          adwords, Reach and Lead Generation Campaigns for 3
                          Months. Excluding Campaign Charges
                        </td>
                        <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                          ₹55000
                        </td>
                        <td>
                          <button className="rounded group bg-blue-500 text-white px-3 py-1 transition-all duration-500 hover:bg-blue-700 cursor-pointer flex item-center">
                            Select
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDataPopup;

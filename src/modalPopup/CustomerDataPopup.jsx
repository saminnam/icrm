import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { API_BASE_URL } from "../components/Api";
import { IoSearchOutline } from "react-icons/io5";

const CustomerDataPopup = ({ openPopup, setOpenPopup }) => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(10);
  const [animateIn, setAnimateIn] = useState(false);

  const fetchCustomer = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}store_customers`);
      setCustomers(res.data.data);
      console.log(res.data);
    } catch (err) {
      console.error("Failed to fetch data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (openPopup) {
      fetchCustomer();
      const timer = setTimeout(() => {
        setAnimateIn(true);
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setAnimateIn(false);
    }
  }, [openPopup]);

  const filteredCustomers = useMemo(() => {
    return customers.filter(
      (customer) =>
        String(customer.name || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        String(customer.phone || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );
  }, [customers, searchTerm]);

  const sortedCustomers = useMemo(() => {
    let sortableCustomers = [...filteredCustomers];
    if (sortConfig.key) {
      sortableCustomers.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableCustomers;
  }, [filteredCustomers, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = sortedCustomers.slice(
    indexOfFirstCustomer,
    indexOfLastCustomer
  );

  const totalPages = Math.ceil(sortedCustomers.length / customersPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getSortIndicator = (key) => {
    if (sortConfig.key !== key) return null;

    return sortConfig.direction === "ascending" ? (
      <FaArrowUp className="ml-1" />
    ) : (
      <FaArrowDown className="ml-1" />
    );
  };

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
            Select An Existing Customer
          </h2>
          <button
            onClick={() => setOpenPopup(false)}
            className="text-gray-500 cursor-pointer hover:text-gray-700 text-3xl font-bold leading-none"
          >
            &times;
          </button>
        </div>
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search customers..."
            className="p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
          <IoSearchOutline className="absolute top-2 right-3 cursor-pointer text-2xl text-gray-500"/>
        </div>
        <div className="flex-grow overflow-hidden">
          <div className="min-w-full inline-block align-middle">
            <div className="overflow-hidden border rounded border-gray-300">
              {loading ? (
                <div className="text-center p-4 text-gray-600">
                  Loading customers...
                </div>
              ) : (
                <div className="relative">
                  <div className="overflow-y-auto overflow-x-auto max-h-[50vh]">
                    <table className="table-auto min-w-full rounded">
                      <thead className="sticky top-0 bg-gray-50 z-10">
                        <tr>
                          <th
                            scope="col"
                            className="p-3 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize cursor-pointer"
                            onClick={() => requestSort("name")}
                          >
                            <div className="flex items-center justify-between">
                              Name {getSortIndicator("name")}
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="p-3 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px] cursor-pointer"
                            onClick={() => requestSort("phone")}
                          >
                            <div className="flex items-center justify-between">
                              Phone No {getSortIndicator("phone")}
                            </div>
                          </th>
                          <th
                            scope="col"
                            className="p-3 text-left whitespace-nowrap text-sm leading-6 font-semibold text-gray-900 capitalize min-w-[150px] cursor-pointer"
                          >
                            <div className="flex items-center justify-between">
                              Action
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300">
                        {currentCustomers.length === 0 ? (
                          <tr>
                            <td
                              colSpan="3"
                              className="text-center p-4 text-gray-600"
                            >
                              No customers found.
                            </td>
                          </tr>
                        ) : (
                          currentCustomers.map((cus, index) => (
                            <tr
                              className="bg-white hover:bg-blue-50 transition-all duration-300 cursor-pointer"
                              key={cus.id || index}
                            >
                              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                {cus.name}
                              </td>
                              <td className="p-3 whitespace-nowrap text-sm leading-6 font-medium text-gray-900">
                                {cus.phone}
                              </td>
                              <td>
                                <button className="rounded group bg-blue-500 text-white px-3 py-1 transition-all duration-500 hover:bg-blue-700 cursor-pointer flex item-center">
                                  Select
                                </button>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {!loading && sortedCustomers.length > customersPerPage && (
          <div className="flex justify-end mt-4">
            <nav className="relative z-0 inline-flex rounded shadow-sm -space-x-px">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="relative transition-all duration-300 cursor-pointer hover:bg-blue-500 hover:text-white inline-flex items-center px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`relative inline-flex cursor-pointer items-center px-4 py-2 border border-gray-300 text-sm font-medium ${
                    currentPage === index + 1
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="relative duration-300 cursor-pointer hover:bg-blue-500 hover:text-white inline-flex items-center px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDataPopup;

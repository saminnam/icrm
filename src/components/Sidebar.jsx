import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { IoIosLaptop } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { GoDot } from "react-icons/go";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { AiOutlineFileText } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import logo_gold from "../assets/logos/logo-gold.png";

const navItems = [
  {
    icon: <IoIosLaptop className="text-2xl text-gray-600" />,
    label: "Dashboard",
    children: [],
    link: "/dashboard",
  },
  {
    icon: <FiUsers className="text-2xl text-gray-600" />,
    label: "Customers",
    children: [
      { label: "Add Customer", link: "/add-customer" },
      { label: "Manage Customers", link: "/customer-list" },
    ],
  },
  {
    icon: <LiaFileInvoiceSolid className="text-2xl text-gray-600" />,
    label: "Proforma Invoices",
    children: [
      { label: "Create Proforma Invoice", link: "/create-proforma" },
      { label: "Manage Proforma Invoice", link: "/proforma-list" },
    ],
  },
  {
    icon: <AiOutlineFileText className="text-2xl text-gray-600" />,
    label: "Invoices",
    children: [
      { label: "Create Invoice", link: "/create-invoice" },
      { label: "Manage Invoice", link: "/invoice-list" },
      { label: "Download CSV", link: "/download-csv" },
    ],
  },
  {
    icon: <HiOutlineArchiveBox className="text-2xl text-gray-600" />,
    label: "Products",
    children: [
      { label: "Add Products", link: "/add-product" },
      { label: "Manage Products", link: "/product-list" },
    ],
  },
  {
    icon: <FaRegUser className="text-2xl text-gray-600" />,
    label: "System Users",
    children: [
      { label: "Add Users", link: "/add-user" },
      { label: "Manage Users", link: "/user-list" },
    ],
  },
];

const Sidebar = ({ sidebarExpanded, hoveringSidebar, setHoveringSidebar }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileSiderBar, setMobileSidebar] = useState(false);
  const handleDropdownToggle = (label) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const setSidebarClose = () => {
    if (window.innerWidth <= 580) {
      setMobileSidebar(true);
    }
  };

  useEffect(() => {
    setSidebarClose();
  }, []);

  return (
    <div className="flex">
      <aside
        id="sidebar"
        className={`${
          sidebarExpanded || hoveringSidebar ? "w-72" : "w-16"
        } fixed top-0 left-0 h-screen z-40 transition-all duration-300 bg-white shadow border-r-2 border-[#F8F9FB]`}
        onMouseEnter={() => !sidebarExpanded && setHoveringSidebar(true)}
        onMouseLeave={() => setHoveringSidebar(false)}
      >
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo_gold} alt="Logo-Gold" className="h-6" />
            {(sidebarExpanded || hoveringSidebar) && (
              <span className="ml-2 text-lg font-semibold">Invoice System</span>
            )}
          </div>
        </div>
        <nav className="mt-5 px-2 text-[14px]">
          <ul className="flex flex-col gap-2 max-w-[280px] mx-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.link}
                  className="flex items-center justify-between gap-2 rounded transition-all duration-300 hover:bg-amber-100 p-2 font-medium hover:cursor-pointer"
                  onClick={() => handleDropdownToggle(item.label)}
                >
                  <span className="flex gap-3 items-center">
                    {item.icon}
                    {(sidebarExpanded || hoveringSidebar) && (
                      <span>{item.label}</span>
                    )}
                  </span>
                  {item.children.length > 0 &&
                    (sidebarExpanded || hoveringSidebar) && (
                      <MdKeyboardArrowRight
                        className={`w-5 h-5 text-gray-500 transition ${
                          openDropdown === item.label ? "rotate-90" : ""
                        }`}
                      />
                    )}
                </Link>
                {item.children.length > 0 &&
                  openDropdown === item.label &&
                  (sidebarExpanded || hoveringSidebar) && (
                    <ul className="flex flex-col pl-6 pr-2 my-3">
                      {item.children.map((child) => (
                        <li
                          key={child.label}
                          className="flex font-semibold items-center p-2 gap-2 rounded transition-all duration-300 hover:bg-amber-100 text-gray-700"
                        >
                          <GoDot className="text-sm" />
                          <Link to={child.link}>{child.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;

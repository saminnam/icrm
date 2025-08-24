
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineArchiveBox } from "react-icons/hi2";
import { LuUsersRound } from "react-icons/lu";
import { IoIosLaptop } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { GoDot } from "react-icons/go";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { AiOutlineFileText } from "react-icons/ai";
import { MdKeyboardArrowRight } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2"; // For the close button inside sidebar if needed

// Assuming logo_gold is imported correctly from assets
// import logo_gold from "../assets/logos/logo-gold.png"; // Uncomment and ensure path is correct

// Placeholder for logo_gold if not actually available in assets
const logo_gold = "https://placehold.co/40x24/E8B92D/FFFFFF?text=LOGO";


const navItems = [
  {
    icon: <IoIosLaptop className="text-2xl text-gray-600 dark:text-gray-400" />,
    label: "Dashboard",
    children: [],
    link: "/dashboard",
  },
  {
    icon: <FiUsers className="text-2xl text-gray-600 dark:text-gray-400" />,
    label: "Customers",
    children: [
      { label: "Add Customer", link: "/add-customer" },
      { label: "Manage Customers", link: "/customer-list" },
    ],
  },
  {
    icon: <LiaFileInvoiceSolid className="text-2xl text-gray-600 dark:text-gray-400" />,
    label: "Proforma Invoices",
    children: [
      { label: "Create Proforma Invoice", link: "/create-proforma" },
      { label: "Manage Proforma Invoice", link: "/proforma-list" },
    ],
  },
  {
    icon: <AiOutlineFileText className="text-2xl text-gray-600 dark:text-gray-400" />,
    label: "Invoices",
    children: [
      { label: "Create Invoice", link: "/create-invoice" },
      { label: "Manage Invoice", link: "/invoice-list" },
      { label: "Download CSV", link: "/download-csv" },
    ],
  },
  {
    icon: <HiOutlineArchiveBox className="text-2xl text-gray-600 dark:text-gray-400" />,
    label: "Products",
    children: [
      { label: "Add Products", link: "/add-product" },
      { label: "Manage Products", link: "/product-list" },
    ],
  },
  {
    icon: <LuUsersRound className="text-2xl text-gray-600 dark:text-gray-400" />,
    label: "System Users",
    children: [
      { label: "Add Users", link: "/add-user" },
      { label: "Manage Users", link: "/user-list" },
    ],
  },
];

// Sidebar component now receives isSidebarOpen and toggleSidebar from parent
const MobileSiderBar = ({ isSidebarOpen, toggleSidebar, className  }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false); // State to detect mobile viewport

  // Effect to detect mobile view on mount and resize
  useEffect(() => {
    const handleResize = () => {
      // Tailwind's 'md' breakpoint is 768px by default
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownToggle = (label) => {
    // Only toggle dropdowns if the sidebar is visually expanded (desktop or open mobile)
    // On mobile, if sidebar is open, allow dropdowns. On desktop, it's always "expanded" enough.
    if (isSidebarOpen || !isMobileView) {
      setOpenDropdown(openDropdown === label ? null : label);
    }
  };

  return (
    <div>
      {/* Mobile Overlay - appears only on mobile when sidebar is open */}
      {isMobileView && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar} // Close sidebar when clicking overlay
        ></div>
      )}

      {/* Sidebar itself */}
      <aside
        id="sidebar"
        // Conditional classes for width and transform based on mobile/desktop and open/closed state
        className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 bg-white shadow border-r-2 border-[#F8F9FB] dark:bg-gray-800 dark:border-gray-700
          ${isMobileView
            ? (isSidebarOpen ? "translate-x-0 w-72" : "-translate-x-full w-72") // Mobile: slides in/out
            : (isSidebarOpen ? "w-72" : "w-16") // Desktop: expands/collapses, but always visible
          }`}
      >
        <div className="p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={logo_gold} alt="Logo-Gold" className="h-6" />
            {/* Show "Invoice System" text only when sidebar is expanded or on desktop */}
            {(!isMobileView && isSidebarOpen) || (isMobileView && isSidebarOpen) ? (
              <span className="ml-2 text-lg font-semibold text-gray-900 dark:text-white whitespace-nowrap">Invoice System</span>
            ) : null}
          </div>
          {/* Close button for mobile sidebar (optional, can be outside sidebar too) */}
          {isMobileView && isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="p-1.5 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
            >
              <MdKeyboardArrowRight className="w-6 h-6 rotate-180" /> {/* Left arrow or X icon */}
            </button>
          )}
        </div>
        <nav className="mt-5 px-2 text-[14px]">
          <ul className="flex flex-col gap-2 max-w-[280px] mx-auto">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.link}
                  className="flex items-center justify-between gap-2 rounded transition-all duration-300 hover:bg-amber-100 dark:hover:bg-amber-700 p-2 font-medium hover:cursor-pointer text-gray-700 dark:text-gray-200"
                  onClick={() => handleDropdownToggle(item.label)}
                >
                  <span className="flex gap-3 items-center">
                    {item.icon}
                    {/* Show label only when sidebar is expanded or on desktop */}
                    {(!isMobileView && isSidebarOpen) || (isMobileView && isSidebarOpen) ? (
                      <span className="whitespace-nowrap">{item.label}</span>
                    ) : null}
                  </span>
                  {item.children.length > 0 &&
                    // Show arrow only when sidebar is expanded or on desktop
                    ((!isMobileView && isSidebarOpen) || (isMobileView && isSidebarOpen)) && (
                      <MdKeyboardArrowRight
                        className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-300 ${
                          openDropdown === item.label ? "rotate-90" : ""
                        }`}
                      />
                    )}
                </Link>
                {/* Always render the ul, but control its height and opacity with Tailwind */}
                <ul
                  className={`flex flex-col pl-6 pr-2 my-1 overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      openDropdown === item.label && ((!isMobileView && isSidebarOpen) || (isMobileView && isSidebarOpen))
                        ? "max-h-screen opacity-100" // Use max-h-screen or a sufficiently large value
                        : "max-h-0 opacity-0"
                    }`}
                >
                  {item.children.map((child) => (
                    <li
                      key={child.label}
                      className="flex font-semibold items-center p-2 gap-2 rounded transition-all duration-300 hover:bg-amber-100 dark:hover:bg-amber-700 text-gray-700 dark:text-gray-200"
                    >
                      <GoDot className="text-sm text-gray-500 dark:text-gray-400" />
                      <Link to={child.link} className="whitespace-nowrap w-full">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default MobileSiderBar;

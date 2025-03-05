import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, handleLogout }) => {
  const [theme, setTheme] = useState("default");
  const [isThemeOptionsVisible, setIsThemeOptionsVisible] = useState(false); // State to manage theme options visibility

  // Change the theme based on the selection
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    // You can implement further theme-changing logic here
    alert(`${newTheme} mode is not available right now!`);
  };

  return (
    <div>
      {/* Backdrop Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)} // Close sidebar when clicking on the overlay
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#2c2f3e] p-6 transition-transform z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } md:relative md:translate-x-0`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">📖 Guestbook</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="md:hidden">
            <FiX size={24} />
          </button>
        </div>

        {/* Profile link */}
        <div className="mb-6">
          <Link to="/profile">
            <button className="w-full p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white">
              Profile
            </button>
          </Link>
        </div>

        {/* Theme section */}
        <div className="space-y-4 mb-4">
          <h3 className="text-white">Choose Theme</h3>
          <button
            onClick={() => setIsThemeOptionsVisible(!isThemeOptionsVisible)} // Toggle visibility of options
            className="w-full p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white"
          >
            {isThemeOptionsVisible ? "Hide Options" : "Show Options"}
          </button>

          {/* Show theme options if visible */}
          {isThemeOptionsVisible && (
            <div className="space-y-2 mt-2">
              <button
                onClick={() => handleThemeChange("dark")}
                className="w-full p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white"
              >
                Dark Mode
              </button>
              <button
                onClick={() => handleThemeChange("default")}
                className="w-full p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white"
              >
                Default Mode
              </button>
              <button
                onClick={() => handleThemeChange("white")}
                className="w-full p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white"
              >
                White Mode
              </button>
            </div>
          )}
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md w-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

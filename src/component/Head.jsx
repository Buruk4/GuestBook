import React from "react";
import { FiMenu } from "react-icons/fi";

const Head = ({ setIsSidebarOpen }) => (
  <div className="bg-[#2c2f3e] p-4 flex items-center justify-between shadow-md sticky top-0 z-10">
    <button
      onClick={() => setIsSidebarOpen(true)}
      className="md:hidden p-2 hover:bg-[#3a3d4d] rounded-lg transition-colors"
    >
      <FiMenu size={24} className="text-white" />
    </button>
    <h1 className="text-lg font-semibold text-white">📖 Guestbook</h1>
  </div>
);

export default Head;

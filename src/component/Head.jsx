import React from "react";
import { FiMenu } from "react-icons/fi";

const Head = ({ setIsSidebarOpen }) => (
  <div className="bg-[#2c2f3e] p-4 flex items-center justify-between shadow-md">
    <button onClick={() => setIsSidebarOpen(true)} className="md:hidden">
      <FiMenu size={24} />
    </button>
    <h1 className="text-lg font-semibold">📖 Guestbook</h1>
  </div>
);

export default Head;

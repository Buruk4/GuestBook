import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2c2f3e] text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Links Section */}
        <div className="mb-6">
          <Link to="/about" className="text-lg mx-4 hover:text-[#f9fafb]">
            About
          </Link>
          <Link
            to="/privacy-policy"
            className="text-lg mx-4 hover:text-[#f9fafb]"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-services"
            className="text-lg mx-4 hover:text-[#f9fafb]"
          >
            Terms of Service
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center mb-6 space-x-6">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebookF size={24} className="hover:text-[#4CAF50]" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-[#4CAF50]" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-[#4CAF50]" />
          </a>
        </div>

        {/* Copyright Text */}
        <div className="text-sm text-[#d1d5db]">
          &copy; {new Date().getFullYear()} Guestbook. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

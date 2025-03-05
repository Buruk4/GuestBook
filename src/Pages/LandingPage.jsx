import React from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
const LandingPage = () => {
  return (
    <>
      <div className="bg-[#F4F6F9] min-h-screen flex flex-col justify-center items-center text-center py-10">
        <div className="max-w-3xl mx-auto">
          {/* Header Section */}
          <h1 className="text-6xl font-extrabold text-[#2c2f3e] mb-6">
            Welcome to 📖 Guestbook
          </h1>
          <p className="text-lg text-[#4B5563] mb-12">
            A simple and elegant guestbook app where you can share your
            thoughts, leave messages, and connect with others
          </p>

          {/* Call to Action Buttons */}
          <div className="space-x-6">
            <Link to="/signup">
              <button className="bg-[#2c2f3e] text-white px-8 py-4 rounded-md text-lg font-medium transition duration-300 hover:bg-[#3a4755]">
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className="bg-transparent border-2 border-[#2c2f3e] text-[#2c2f3e] px-8 py-4 rounded-md text-lg font-medium transition duration-300 hover:bg-[#2c2f3e] hover:text-white">
                Login
              </button>
            </Link>
          </div>

          {/* Features Section */}
          <div className="mt-24">
            <h2 className="text-4xl font-semibold text-[#2c2f3e] mb-8">
              Key Features
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-[#2c2f3e] mb-4">
                  Easy to Use
                </h3>
                <p className="text-[#6B7280]">
                  Simply sign up, leave a message, and your guests will be able
                  to view and leave their thoughts easily. No hassle, just
                  connection.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-[#2c2f3e] mb-4">
                  Stay Connected
                </h3>
                <p className="text-[#6B7280]">
                  You can stay updated on new messages your guestbook.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-[#2c2f3e] mb-4">
                  Customizable
                </h3>
                <p className="text-[#6B7280]">
                  Customize your guestbook with themes, fonts, and layout
                  options to match your personal style.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-xl transition duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-semibold text-[#2c2f3e] mb-4">
                  GuestBook is Fun
                </h3>
                <p className="text-[#6B7280]">
                  Guestbook is a fun and interactive way to connect with others,
                  share messages, and create lasting memories!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;

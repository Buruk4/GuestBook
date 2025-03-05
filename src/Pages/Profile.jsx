import React from "react";
import { auth } from "../firebase"; // Assuming Firebase is integrated
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();
  const user = auth.currentUser; // Get current authenticated user

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login"); // Redirect to login after logout
    } catch (error) {
      console.error("Logout error: ", error);
    }
  };

  return (
    <div className="bg-[#252836] min-h-screen flex flex-col justify-center items-center py-10 text-white">
      <div className="w-full max-w-3xl bg-[#2c2f3e] p-8 rounded-lg shadow-2xl">
        <h1 className="text-4xl font-semibold text-center mb-6">
          Your Profile
        </h1>
        {user ? (
          <div className="space-y-6">
            <div>
              <strong className="text-xl">Name:</strong>
              <p className="text-gray-300">{user.displayName || "N/A"}</p>
            </div>
            <div>
              <strong className="text-xl">Email:</strong>
              <p className="text-gray-300">{user.email}</p>
            </div>

            <div className="flex justify-center mt-8">
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-md transition-all duration-300 transform hover:scale-105"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-300 text-center">No user is logged in.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;

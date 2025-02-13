import React, { useEffect } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/app"); // Redirect if already logged in
      }
    });
  }, [navigate]);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/app"); // Redirect after login
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#252836] text-white">
      <h1 className="text-3xl mb-6">Welcome to Guestbook</h1>
      <button
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;

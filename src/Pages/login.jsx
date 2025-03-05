import React, { useState, useEffect } from "react";
import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if the user is already logged in
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/chat"); // Redirect if already logged in
      }
    });
  }, [navigate]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/chat"); // Redirect after login
    } catch (error) {
      console.error("Google Login Error:", error);
    }
  };

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/chat"); // Redirect after login
    } catch (error) {
      setError("Invalid email or password.");
      console.error("Email/Password Login Error:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#252836] text-white">
      <h1 className="text-3xl mb-6">Welcome to Guestbook</h1>

      {/* Display Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Email and Password Login Form */}
      <form onSubmit={handleEmailPasswordLogin} className="space-y-4 mb-6">
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-3 w-72 rounded-lg bg-[#3a3f49] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-3 w-72 rounded-lg bg-[#3a3f49] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-72 p-3 bg-blue-500 hover:bg-blue-600 rounded-lg"
        >
          Login with Email
        </button>
      </form>

      <div className="mb-6">OR</div>

      {/* Google Login Button */}
      <button
        onClick={handleGoogleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg w-72"
      >
        Login with Google
      </button>

      <div className="mt-6 text-sm">
        <p>
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-400 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;

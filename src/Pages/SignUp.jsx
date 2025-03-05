import React, { useState } from "react";
import { auth, provider } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // No need to set the name here since it's automatically provided by Google
      navigate("/chat"); // Redirect after Google signup
    } catch (error) {
      console.error("Google Sign Up Error:", error);
    }
  };

  const handleEmailPasswordSignUp = async (e) => {
    e.preventDefault();
    if (!email || !password || !name) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Update the user profile with their name
      await updateProfile(user, {
        displayName: name,
      });

      navigate("/chat"); // Redirect after email/password signup
    } catch (error) {
      setError("Error creating account. Please try again.");
      console.error("Email/Password Sign Up Error:", error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-[#252836] text-white">
      <h1 className="text-3xl mb-6">Sign Up for Guestbook</h1>

      {/* Display Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Email, Name and Password Signup Form */}
      <form onSubmit={handleEmailPasswordSignUp} className="space-y-4 mb-6">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="p-3 w-72 rounded-lg bg-[#3a3f49] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
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
          Sign Up with Email
        </button>
      </form>

      <div className="mb-6">OR</div>

      {/* Google Sign Up Button */}
      <button
        onClick={handleGoogleSignUp}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg w-72"
      >
        Sign Up with Google
      </button>

      <div className="mt-6 text-sm">
        <p>
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;

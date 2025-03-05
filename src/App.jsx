import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/login";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

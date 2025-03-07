import React, { useState, useEffect } from "react";
import { db, auth } from "../firebase.js";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MessageList from "../component/MessageList.jsx";
import Head from "../component/Head.jsx";
import Sidebar from "../component/Sidebar.jsx";
import MessageInput from "../component/MessageInput.jsx";

const ChatPage = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "guestbook"), (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
      unsubscribeAuth();
    };
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() && user) {
      await addDoc(collection(db, "guestbook"), {
        name: user.displayName,
        message,
        uid: user.uid,
        timestamp: new Date(),
      });
      setMessage("");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <div className="min-h-screen flex bg-[#252836]  text-white">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        handleLogout={handleLogout}
      />

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <Head setIsSidebarOpen={setIsSidebarOpen} />

        {/* Message List - Takes full height */}
        <div className="flex-1 flex flex-col overflow-hidden h-full">
          <MessageList messages={messages} user={user} />
        </div>
        <div className="mt-0">
          <MessageInput
            message={message}
            setMessage={setMessage}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

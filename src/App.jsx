import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import MessageList from "./component/MessageList.jsx";

const App = () => {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "guestbook"), (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        navigate("/"); // Redirect to login if not logged in
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#252836] text-white p-6">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8">
        {/* Form Section (Left) */}
        <div className="bg-[#2c2f3e] p-6 rounded-lg w-full md:w-1/3 shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">
            📖 Guestbook
          </h2>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md mb-4"
          >
            Logout
          </button>

          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message..."
              className="w-full p-2 rounded-md bg-[#1f222e] text-white"
              required
            />
            <button
              type="submit"
              className="bg-green-500 p-2 rounded-md w-full"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Message List Section (Right) */}
        <MessageList messages={messages} user={user} />
      </div>
    </div>
  );
};

export default App;

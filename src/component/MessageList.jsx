import React from "react";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";

const MessageList = ({ messages, user }) => {
  const handleDelete = async (id, uid) => {
    if (user && user.uid === uid) {
      await deleteDoc(doc(db, "guestbook", id));
    } else {
      alert("You can only delete your own messages!");
    }
  };

  return (
    <div className="w-full md:w-2/3 bg-[#2c2f3e] p-6 rounded-lg shadow-lg min-h-[400px] max-h-[500px] overflow-y-auto">
      <h3 className="text-xl font-semibold mb-4">Messages</h3>
      {messages.map((msg) => (
        <div key={msg.id} className="bg-[#1f222e] p-3 rounded-md mb-2">
          <p className="font-semibold">{msg.name}:</p>
          <p className="text-sm">{msg.message}</p>
          {user && user.uid === msg.uid && (
            <button
              onClick={() => handleDelete(msg.id, msg.uid)}
              className="text-red-500 text-xs mt-1"
            >
              ❌ Delete
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageList;

import React, { useEffect, useRef } from "react";
import { db } from "../firebase";
import { deleteDoc, doc } from "firebase/firestore";
import MessageInput from "./MessageInput";

const MessageList = ({ messages, user }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleDelete = async (id, uid) => {
    if (user && user.uid === uid) {
      await deleteDoc(doc(db, "guestbook", id));
    } else {
      alert("You can only delete your own messages!");
    }
  };

  return (
    <div className="w-full md:w-2/3 bg-[#2c2f3e] p-6 rounded-lg shadow-lg flex flex-col h-[calc(100vh-160px)] md:h-[calc(100vh-120px)]">
      <h3 className="text-xl font-semibold mb-4 text-white">Messages</h3>

      {/* Messages List - Takes Full Available Height */}
      <div className="flex-1 overflow-y-auto space-y-2 p-2">
        {messages
          .sort((a, b) => a.timestamp - b.timestamp)
          .map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-2 p-2 rounded-md max-w-xs md:max-w-md w-fit ${
                user && user.uid === msg.uid
                  ? "ml-auto flex-row-reverse bg-[#1f222e]"
                  : "mr-auto bg-[#1f222e]"
              } shadow-md relative`}
            >
              {msg.imageUrl && (
                <img
                  src={msg.imageUrl}
                  alt="User Upload"
                  className="w-10 h-10 rounded-md"
                />
              )}
              <div className="flex-1 p-1 rounded-lg">
                <p className="font-semibold text-xs text-gray-300">
                  {msg.name}
                </p>
                <p className="text-sm text-gray-400 break-words">
                  {msg.message}
                </p>
                {user && user.uid === msg.uid && (
                  <button
                    onClick={() => handleDelete(msg.id, msg.uid)}
                    className="text-red-500 text-xs absolute top-1 right-2"
                  >
                    ✖
                  </button>
                )}
              </div>
            </div>
          ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;

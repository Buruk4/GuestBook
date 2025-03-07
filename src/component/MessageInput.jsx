import React from "react";
import { FiSend } from "react-icons/fi";

const MessageInput = ({ message, setMessage, handleSubmit }) => (
  <form
    onSubmit={handleSubmit}
    className="flex items-center p-2 bg-[#1f222e] border-t border-gray-700 rounded-b-lg"
  >
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Write a message..."
      className="flex-1 p-2 rounded-md bg-[#252836] text-white resize-none h-10 focus:outline-none focus:ring-2 focus:ring-purple-350"
      required
    />
    <button
      type="submit"
      className="ml-2 p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
    >
      <FiSend size={20} className="text-white" />
    </button>
  </form>
);

export default MessageInput;

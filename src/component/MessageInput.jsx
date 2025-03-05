import React from "react";
import { FiSend } from "react-icons/fi";

const MessageInput = ({ message, setMessage, handleSubmit }) => (
  <form
    onSubmit={handleSubmit}
    className="flex items-center p-2 bg-[#1f222e] border-t border-gray-700"
  >
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Write a message..."
      className="flex-1 p-2 rounded-md bg-[#252836] text-white resize-none h-10"
      required
    />
    <button type="submit" className="ml-2 p-2 bg-green-500 rounded-full">
      <FiSend size={20} />
    </button>
  </form>
);

export default MessageInput;

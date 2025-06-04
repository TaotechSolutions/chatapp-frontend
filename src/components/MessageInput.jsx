import React, { useState } from "react";

function MessageInput({ onSend }) {
  const [message, setMessage] = useState(""); // This keeps track of what you type

  // This runs when you press Enter or click Send
  const handleSend = () => {
    if (message.trim() === "") return; // Don't send empty messages
    onSend({ message }); // This calls the function in App.jsx
    setMessage(""); // Clear the box
  };

  // This runs when you press a key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4 border-t flex gap-2">
      <input
        className="flex-1 border rounded px-2 py-1"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-blue-500 text-white px-4 py-1 rounded"
        onClick={handleSend}
      >
        Send
      </button>
    </div>
  );
}

export default MessageInput;

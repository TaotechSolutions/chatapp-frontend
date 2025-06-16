import React, { useRef, useState } from "react";
import {
  FaPaperPlane,
  FaMicrophone,
  FaPaperclip,
  FaSmile,
} from "react-icons/fa";

function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const fileInputRef = useRef();

  const emojis = [
    "😀",
    "😁",
    "😂",
    "🤣",
    "😃",
    "😄",
    "😅",
    "😆",
    "😉",
    "😊",
    "😋",
    "😎",
    "😍",
    "😘",
    "🥰",
    "😗",
    "😙",
    "😚",
    "🙂",
    "🤗",
    "🤩",
    "🤔",
    "🤨",
    "😐",
    "😑",
    "😶",
    "🙄",
    "😏",
    "😣",
    "😥",
    "😮",
    "🤐",
    "😯",
    "😪",
    "😫",
    "🥱",
    "😴",
    "😌",
    "😛",
    "😜",
  ];

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.size > 5 * 1024 * 1024) {
      alert("File size must be less than 5MB");
      return;
    }
    setFile(selected);
    if (selected) {
      const reader = new FileReader();
      reader.onload = (ev) => setFilePreview(ev.target.result);
      reader.readAsDataURL(selected);
    } else {
      setFilePreview(null);
    }
  };

  const handleSend = () => {
    if (!message && !file) return;
    onSend({ message, file });
    setMessage("");
    setFile(null);
    setFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleEmojiClick = (emoji) => {
    setMessage((msg) => msg + emoji);
    setShowEmojis(false);
  };

  return (
    <div className="p-3 border-t bg-gray-100 relative">
      <div className="flex items-center gap-2">
        {/* File Attachment Button */}
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          title="Attach file"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
        >
          <FaPaperclip />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Emoji Picker Button */}
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
          onClick={() => setShowEmojis((prev) => !prev)}
          title="Emoji picker"
        >
          <FaSmile />
        </button>

        {/* Emoji Picker */}
        {showEmojis && (
          <div className="absolute bottom-16 left-12 bg-white border rounded shadow-lg p-2 flex flex-wrap w-72 z-20">
            {emojis.map((emoji) => (
              <button
                key={emoji}
                className="text-xl p-1 hover:bg-gray-100 rounded"
                onClick={() => handleEmojiClick(emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}

        {/* Input Field */}
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-4 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-0 focus:border-green-500"
        />

        {/* Microphone Button */}
        <button
          type="button"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
          title="Voice input"
        >
          <FaMicrophone />
        </button>

        {/* Send Button */}
        <button
          type="button"
          onClick={handleSend}
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
          title="Send"
        >
          <FaPaperPlane />
        </button>
      </div>

      {/* File Preview Section */}
      {filePreview && (
        <div className="flex items-center gap-2 mt-2">
          <img
            src={filePreview}
            alt="preview"
            className="h-16 w-16 object-cover rounded"
          />
          <button
            type="button"
            className="text-red-500 hover:underline"
            onClick={() => {
              setFile(null);
              setFilePreview(null);
              if (fileInputRef.current) fileInputRef.current.value = "";
            }}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default MessageInput;
// This component provides a message input area with file attachment, emoji picker, and send functionality.
// It includes features like file size validation, emoji selection, and a responsive design.

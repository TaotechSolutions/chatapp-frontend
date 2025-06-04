import React, { useRef, useState } from "react";

function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const fileInputRef = useRef();

  // Expand this list as you like!
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
    setShowEmojis(false); // Hide emoji panel after picking
  };

  return (
    <div className="p-4 border-t flex flex-col gap-2 relative">
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="px-2 py-1 border rounded"
          onClick={() => fileInputRef.current.click()}
          title="Attach file"
        >
          📎
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileChange}
        />
        {/* Emoji icon */}
        <button
          type="button"
          className="text-xl px-2 py-1 border rounded"
          onClick={() => setShowEmojis((show) => !show)}
          title="Open emoji picker"
        >
          😀
        </button>
        {/* Emoji picker panel */}
        {showEmojis && (
          <div className="absolute bottom-14 left-16 bg-white border rounded shadow-lg p-2 flex flex-wrap w-72 z-10">
            {emojis.map((emoji) => (
              <button
                key={emoji}
                type="button"
                className="text-2xl m-1 hover:bg-gray-100 rounded"
                onClick={() => handleEmojiClick(emoji)}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
        <input
          className="flex-1 border rounded px-2 py-1"
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-1 rounded"
          onClick={handleSend}
        >
          Send
        </button>
      </div>
      {filePreview && (
        <div className="flex items-center gap-2 mt-2">
          <img src={filePreview} alt="preview" className="h-16 rounded" />
          <button
            type="button"
            className="text-red-500"
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

import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:"); // Replace with your backend URL

const ChatList = () => {``
  const [chatParticipants, setChatParticipants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const itemRefs = useRef([]);

  // Initial dummy users (without isOnline)
  useEffect(() => {
    const names = [
      "Smith", "Ali", "Johnson", "Mensah", "Brown", "Garcia", "Adams",
      "Hassan", "Lee", "Owusu", "Williams", "Kim", "Okafor", "Park",
      "Abdul", "Osei", "Khan", "Anderson", "Cisse", "Bakari"
    ];

    const shuffled = [...names].sort(() => 0.5 - Math.random()).slice(0, 5);
    const users = shuffled.map((name, index) => ({
      id: index + 1,
      name,
      isOnline: false, // default
    }));

    setChatParticipants(users);
  }, []);

  // Real-time presence from socket
  useEffect(() => {
    socket.on("presenceUpdate", (onlineUserIds) => {
      setChatParticipants((prev) =>
        prev.map((user) => ({
          ...user,
          isOnline: onlineUserIds.includes(user.id),
        }))
      );
    });

    return () => socket.off("presenceUpdate");
  }, []);

  const filteredChats = chatParticipants.filter((person) =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Auto-scroll to match
  useEffect(() => {
    if (!searchQuery) return;
    const index = chatParticipants.findIndex((person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (index !== -1 && itemRefs.current[index]) {
      itemRefs.current[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [searchQuery, chatParticipants]);

  const highlightMatch = (text) => {
    if (!searchQuery) return text;
    const parts = text.split(new RegExp(`(${searchQuery})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase()
        ? <span key={i} className="bg-yellow-300">{part}</span>
        : part
    );
  };

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">Chat</h2>
      </div>

      <div className="sticky top-0 bg-white z-10 mb-4">
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full p-2 border border-gray-300 rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="space-y-2 max-h-80 overflow-y-auto">
        {filteredChats.length > 0 ? (
          filteredChats.map((contact, index) => (
            <div
              key={contact.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className="flex items-center space-x-2"
            >
              <div className="relative">
                <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                  {contact.name.charAt(0)}
                </div>
                <span
                  className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-white ${
                    contact.isOnline ? "bg-green-500" : "bg-gray-400"
                  }`}
                ></span>
              </div>
              <span>{highlightMatch(contact.name)}</span>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-500 py-10">
            <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M8 10h.01M12 14h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-medium">No chats found</p>
            <p className="text-sm">Try a different name or check your spelling.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatList;

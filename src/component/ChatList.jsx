import React, { useEffect, useState } from "react";
import { FaCommentDots } from "react-icons/fa";

const ChatList = () => {
  const [chatParticipants, setChatParticipants] = useState([]);

  useEffect(() => {
    const sampleNames = [
      "Smith", "Ali", "Johnson", "Mensah", "Brown", "Garcia", "Adams",
      "Hassan", "Lee", "Owusu", "Williams", "Kim", "Okafor", "Park",
      "Abdul", "Osei", "Khan", "Anderson", "Cisse", "Bakari",
    ];

    const shuffled = [...sampleNames].sort(() => 0.5 - Math.random()).slice(0, 5);
    const generated = shuffled.map((name, index) => ({ id: index + 1, name }));

    setChatParticipants(generated);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2 font-semibold">
          <span className="font-semibold">Chat</span>
        </div>
       
      </div>
      <div className="sticky top-0 bg-white z-10 mb-4">
        <input
          type="text"
          placeholder="Search chats..."
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="space-y-2">
        {chatParticipants.map((contact) => (
          <div key={contact.id} className="flex items-center space-x-2">
            <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
              {contact.name.charAt(0)}
            </div>
            <span>{contact.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatList;

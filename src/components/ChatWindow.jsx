import React from 'react';
import ChatBubble from './ChatBubble';
import EmptyState from './EmptyState';

export default function ChatWindow({ selectedChat }) {
  if (!selectedChat) return <EmptyState />;

  return (
    <div className="flex flex-col h-screen bg-[#1a1a1a] text-white">
      {/* header */}
      <div className="flex items-center p-[10px] bg-[#222] border-b-[1px] border-solid border-[#333]">
        <img
          src={selectedChat.profilePic}
          className="rounded-full"
          style={{ width: '40px', height: '40px' }}
          alt="profilePic"
        />
        <div className="flex-grow ml-2">
          <h3>{selectedChat.name}</h3>
          <p className="status">Online</p>
        </div>
        <div className="actions">
          <button className="bg-transparent text-[18px] text-white ml-2 cursor-pointer">
            📞
          </button>
          <button className="bg-transparent text-[18px] text-white ml-2 cursor-pointer">
            🎥
          </button>
        </div>
      </div>

      {/* body */}

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
        {selectedChat.messages.map((msg, i) => (
          <ChatBubble key={i} message={msg} />
        ))}
      </div>
    </div>
  );
}

// sample of selectedchat
// const selectedChat = {
//     name: "Emy",
//     profilePic: "image.com",
//     messages:[
//         {
//             text: "Hello Betty!",
//             time: "5:00 AM",
//             profilepic: "image.com",
//             sender: true
//         },
//         {
//             text: "Hello Emy!",
//             time: "5:02 AM",
//             profilepic: "image.com",
//             sender: false
//         }
//     ]
// }
//

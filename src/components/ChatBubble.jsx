import React from 'react';

const stats = {
  delivered: '✔',
  read: '✔✔',
  sent: '📩',
};

function ChatBubble({ message }) {
  const isSender = message.sender;
  const contClass = `flex mb-3 ${isSender ? 'justify-end' : 'justify-start'}`;
  const bubbleClass = `p-4 rounded  ${isSender ? 'bg-green-600 text-white' : 'bg-gray-100 text-black'}`;

  return (
    <>
      <div className={contClass}>
        {!isSender && (
          <img
            src={message.profilepic}
            alt="profile-pic"
            className="rounded-full mr-2"
            style={{ width: '40px', height: '40px' }}
          />
        )}

        <div className={bubbleClass} style={{ maxWidth: '75%' }}>
          <div>{message.text}</div>
          <div className="flex justify-between items-center mt-2 text-small">
            <span>{message.time}</span>
            {isSender && <span className="ml-2">{stats[message.status]}</span>}
          </div>
        </div>
        {isSender && (
          <img
            src={message.profilepic}
            alt="profilepic"
            className="rounded-full ml-2 object-cover"
            style={{ width: '40px', height: '40px' }}
          />
        )}
      </div>
    </>
  );
}

export default ChatBubble;

//guide for the return section:
//Wrap ALL in conteiner class {contClass}
//If not sender, align left
//
//if sender, align right

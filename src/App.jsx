import React, { useState } from "react";
import { FaUserFriends, FaCommentDots } from "react-icons/fa";
import ContactList from "./component/ContactList";
import ChatList from "./component/ChatList";


const chatParticipants = [
  { id: 1, name: "Smith" },
  { id: 2, name: "Ali" },
];

function App() {
  const [view, setView] = useState("contacts");
  const [selectedContacts, setSelectedContacts] = useState([]);

  const handleSelectContact = (contact) => {
    const alreadySelected = selectedContacts.find((c) => c.id === contact.id);
    if (alreadySelected) {
      setSelectedContacts(selectedContacts.filter((c) => c.id !== contact.id));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  return (
    <div className="flex h-screen">

      <div className="w-16 bg-white border-r p-4 flex flex-col items-center space-y-4">
        <FaCommentDots
          className={`text-2xl cursor-pointer ${
            view === "chats" ? "text-green-600" : "text-gray-500"
          }`}
          onClick={() => setView("chats")}
        />
        <FaUserFriends
          className={`text-2xl cursor-pointer ${
            view === "contacts" ? "text-green-600" : "text-gray-500"
          }`}
          onClick={() => setView("contacts")}
        />
      </div>

      
      <div className="w-64 bg-white border-r p-4 overflow-y-auto">
        {view === "contacts" && (
          <ContactList
            onSelect={handleSelectContact}
            selectedContacts={selectedContacts}
          />
        )}
        {view === "chats" && (
          <ChatList chatParticipants={chatParticipants} />
        )}
      </div>

<div className="flex-1 flex flex-col items-center justify-center text-center px-4">
  <div className="bg-green-100 rounded-full p-4 mb-4">
    <svg className="w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v1H2V5zm0 3h16v7a2 2 0 01-2 2H4a2 2 0 01-2-2V8zm6 2v4h4v-4H8z" />
    </svg>
  </div>
  <h2 className="text-xl font-semibold mb-2">Select Contact</h2>
  <p className="text-gray-500 mb-6">
    Choose someone to start chatting with. 
  </p>
  <button className="!bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded">
    Select Contact
  </button>
</div>


    </div>
  );
}

export default App;

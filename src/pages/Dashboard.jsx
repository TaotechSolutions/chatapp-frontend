import React, { useState } from "react";
import { FaCommentDots, FaUserFriends } from "react-icons/fa";
import ContactList from "../component/ContactList";
import ChatList from "../component/ChatList";
import CreateGroupModal from "../component/CreateGroupModal";

function Dashboard() {
  const [view, setView] = useState("contacts");
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [showGroupModal, setShowGroupModal] = useState(false);
  const [groupName, setGroupName] = useState("");

  const handleSelectContact = (contact) => {
    const alreadySelected = selectedContacts.find((c) => c.id === contact.id);
    if (alreadySelected) {
      setSelectedContacts(selectedContacts.filter((c) => c.id !== contact.id));
    } else {
      setSelectedContacts([...selectedContacts, contact]);
    }
  };

  const handleCreateGroup = () => {
    if (!groupName || selectedContacts.length < 3) {
      alert("Please enter a group name and select at least 3 contacts.");
      return;
    }

    console.log("Group Created:", {
      name: groupName,
      members: selectedContacts,
    });

    setGroupName("");
    setSelectedContacts([]);
    setShowGroupModal(false);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
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

      {/* Side Panel */}
      <div className="w-64 bg-white border-r p-4 overflow-y-auto">
        {view === "contacts" && (
          <ContactList
            onSelect={handleSelectContact}
            selectedContacts={selectedContacts}
            onCreateGroup={() => setShowGroupModal(true)}
          />
        )}
        {view === "chats" && <ChatList chatParticipants={[]} />}
      </div>

      {/* Main Area */}
      <div className="flex-1 bg-white flex flex-col items-center justify-center text-center px-4">
        <div className="bg-green-100 rounded-full p-4 mb-4">
          <svg
            className="w-12 h-12 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
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

      {/* Group Modal */}
      <CreateGroupModal
        isOpen={showGroupModal}
        onClose={() => setShowGroupModal(false)}
        onCreate={handleCreateGroup}
        groupName={groupName}
        setGroupName={setGroupName}
        selectedContacts={selectedContacts}
      />
    </div>
  );
}

export default Dashboard;

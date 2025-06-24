import React, { useEffect, useState, useRef } from "react";
import { FaUsers } from "react-icons/fa";

const ContactList = ({ onSelect, selectedContacts, onCreateGroup }) => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const contactRefs = useRef([]);

  useEffect(() => {
    const sampleLastNames = [
      "Tolu", "Hakeem", "Feranmi", "Emmanuel", "Abiodun", "Bisi", "Adams",
      "Hassan", "Lee", "Goodness", "Williams", "Kim", "Okafor", "Teejay",
      "Abdul", "Temi", "Ibrahim", "Khan", "Anderson", "Kenny",
      "Bakari", "Diallo", "Nguyen", "Sope", "Kareem", "Obeng", "Taiwo",
      "Doe", "Zulu", "Tunde"
    ];

    const shuffled = [...sampleLastNames].sort(() => 0.5 - Math.random()).slice(0, 30);
    const generatedContacts = shuffled.map((name, index) => ({
      id: index + 1,
      name,
    }));

    setContacts(generatedContacts);
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (!searchTerm) return;
    const matchIndex = contacts.findIndex((contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (matchIndex !== -1 && contactRefs.current[matchIndex]) {
      contactRefs.current[matchIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [searchTerm, contacts]);

  const highlightMatch = (name) => {
    if (!searchTerm) return name;
    const parts = name.split(new RegExp(`(${searchTerm})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={i} className="bg-yellow-300 rounded">{part}</span>
      ) : (
        <span key={i}>{part}</span>
      )
    );
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-2 px-2">
        <span className="text-black font-semibold text-lg">Contacts</span>
        <button
          className="text-green-600 rounded p-2 hover:bg-green-100"
          title="Create Group"
          onClick={onCreateGroup}
        >
          <FaUsers className="w-4 h-4" />
        </button>
      </div>

      {/* Search */}
      <div className="mb-4 sticky top-0 bg-white z-10 px-2">
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      {/* List */}
      <div className="overflow-y-auto max-h-[calc(100vh-150px)] px-2 space-y-2">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact, index) => (
            <div
              key={contact.id}
              ref={(el) => (contactRefs.current[index] = el)}
              onClick={() => onSelect(contact)}
              className={`cursor-pointer flex items-center space-x-3 p-2 rounded transition ${
                selectedContacts?.some((c) => c.id === contact.id)
                  ? "bg-green-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold uppercase">
                {contact.name.charAt(0)}
              </div>
              <span className="capitalize">{highlightMatch(contact.name)}</span>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-12 flex flex-col items-center">
            <svg className="w-12 h-12 mb-2 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M8 10h.01M12 14h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="font-medium">No contacts found</p>
            <p className="text-sm">Try searching for another name.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactList;

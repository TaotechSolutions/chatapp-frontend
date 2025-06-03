import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";


const ContactList = ({ onSelect, selectedContacts }) => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const sampleLastNames = [
      "Tolu", "Hakeem", "Feranmi", "Emmanuel", "Abiodun", "Bisi", "Adams",
      "Hassan", "Lee", "goodness", "Williams", "Kim", "Okafor", "teejay",
      "Abdul", "Temi", "ibrahim", "Khan", "Anderson", "kenny",
      "Bakari", "Diallo", "Nguyen", "Sope", "kareem", "Obeng", "Taiwo",
      "Doe", "Zulu", "Tunde"
    ];

    const shuffled = [...sampleLastNames]
      .sort(() => 0.5 - Math.random())
      .slice(0, 30);

    const generatedContacts = shuffled.map((name, index) => ({
      id: index + 1,
      name,
    }));

    setContacts(generatedContacts);
  }, []);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex items-center justify-between mb-2 px-2">
        <span className="text-black font-semibold text-lg">Contacts</span>
        <button
  className="!bg-green-600 text-green-600 rounded p-1 hover:bg-green-200 focus:ring-0 focus:ring-transparent"
  title="Create Group"
  onClick={() => alert("Open create group modal")}
>
  <FaUsers className="w-4 h-4" />
</button>


      </div>
      <div className="mb-4 sticky top-0 bg-white z-10 px-2">
        <input
          type="text"
          placeholder="Search contacts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <div className="overflow-y-auto max-h-[calc(100vh-150px)] px-2 space-y-2">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            onClick={() => onSelect(contact)}
            className={`cursor-pointer flex items-center space-x-3 p-2 rounded ${
              selectedContacts?.find((c) => c.id === contact.id)
                ? "bg-green-100"
                : "hover:bg-gray-100"
            }`}
          >
            <div className="bg-green-500 text-white w-8 h-8 flex items-center justify-center rounded-full font-semibold">
              {contact.name.charAt(0)}
            </div>
            <span>{contact.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactList;

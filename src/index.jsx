import React, { useState, useRef } from 'react';
import { FiEdit2 } from 'react-icons/fi';
import BackgroundSettings from './sideBar';

const SettingsSidebar = ({ onBackgroundChange }) => {
  const [openIndex, setOpenIndex] = useState(null);
  const [tempPhoto, setTempPhoto] = useState('/default-avatar.png'); // placeholder image
  const fileInputRef = useRef();

  const handleEditPicture = () => fileInputRef.current.click();

  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setTempPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const settingsItems = [
    {
      title: 'Profile Picture',
      content: (
        <div className="flex flex-col items-center space-y-3">
          <div className="relative w-24 h-24">
            <img
              src={tempPhoto}
              alt="Preview"
              className="w-full h-full object-cover rounded-full border border-gray-300"
            />
            <button
              onClick={handleEditPicture}
              className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow hover:bg-gray-100"
            >
              <FiEdit2 className="w-4 h-4 text-gray-600" />
            </button>
            <input
              type="file"
              accept="image/*"
              onChange={handlePictureChange}
              ref={fileInputRef}
              className="hidden"
            />
          </div>
        </div>
      ),
    },
    {
      title: 'Change Background',
      content: (
        <div className="flex flex-wrap gap-2 mt-2">
          {['white', 'gray-100', 'blue-100', 'pink-100', 'yellow-100'].map((color) => (
            <button
              key={color}
              onClick={() => onBackgroundChange(`bg-${color}`)}
              className={`w-8 h-8 rounded-full border hover:ring-2 ring-offset-2 ring-gray-400 bg-${color}`}
              title={`Set ${color}`}
            />
          ))}
        </div>
      ),
    },
  ];

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-64 h-screen bg-gray-100 border-r p-4 overflow-y-auto">
      {settingsItems.map((item, index) => (
        <div key={index} className="mb-4 border rounded">
          <div
            onClick={() => toggleItem(index)}
            className="bg-gray-300 px-4 py-2 font-semibold cursor-pointer hover:bg-gray-400 transition"
          >
            {item.title}
          </div>
          {openIndex === index && (
            <div className="bg-white px-4 py-3 border-t text-sm text-gray-700">
              {item.content}
            </div>
          )}
        </div>
      ))}



      <BackgroundSettings/>
    </div>
  );
};

export default SettingsSidebar;

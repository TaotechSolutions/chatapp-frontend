import { Camera, Pencil } from 'lucide-react';
import React, { useState } from 'react';

const Background = () => {
  const [background, setBackground] = useState(null);
  const [profilePhoto, setProfilePhoto] = useState(
    'https://doot-light.react.themesbrand.com/static/media/avatar-1.9c8e605558cece65b06c.jpg',
  ); // default profile

  function handleFileChange(e, setterMethod) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setterMethod(reader.result);

    reader.readAsDataURL(file);
  }

  return (
    <div className="w-full">
      {/* Header Background */}
      <div
        className="relative w-full h-44 overflow-hidden"
        style={{
          backgroundImage: `url(${background || 'https://doot-light.react.themesbrand.com/static/media/img-4.8111c4656c8bc3b62569.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Top label */}
        <div className="absolute top-2 left-0 w-full px-4 flex items-center justify-between text-white">
          <h1 className="text-white font-semibold text-lg">Settings</h1>
          <label className="cursor-pointer bg-white p-2 rounded-full shadow">
            <Pencil size={18} className="text-gray-700" />
            <input
              type="file"
              accept="image/*"
              onChange={e => handleFileChange(e, setBackground)}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* Profile Picture - overlapping bottom center */}
      <div className="relative flex justify-center -mt-12 mb-3">
        <div className="relative">
          <img
            src={profilePhoto}
            alt="Profile picture"
            className="w-20 h-20 rounded-[50%] border-4 border-white object-cover"
          />
          <label className="absolute bottom-1 right-1 bg-white p-1 rounded-full shadow cursor-pointer">
            <Camera size={14} className="text-gray-700" />
            <input
              type="file"
              accept="image/*"
              onChange={e => handleFileChange(e, setProfilePhoto)}
              className="hidden"
            />
          </label>
        </div>
      </div>
      {/* Profile Name */}
      <div className="mb-5 text-center text-[#495057] text-[15px] font-[500] ">
        <p>Kathryn Swarey</p>
      </div>
    </div>
  );
};

export default Background;

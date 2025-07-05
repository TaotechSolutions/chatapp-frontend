import React, { useState } from 'react';

const Privacy = () => {
  const [profileStatus, setprofileStatus] = useState('Selected');
  const [isOpen, setisOpen] = useState(true);
  const [isOnline, setisOnline] = useState(true);
  const [showStatus, setshowStatus] = useState('Everyone');
  const [allowGroup, setallowGroup] = useState('Everyone');
  const handleChange = e => {
    setprofileStatus(e.target.value);
  };
  const ChangeStatus = () => {
    setisOpen(!isOpen);
  };
  const handleStatus = e => {
    setshowStatus(e.target.value);
  };
  const changeOnlineStatus = () => {
    setisOnline(!isOnline);
  };

  const chnageGroupPermission = e => {
    setallowGroup(e.target.value);
  };
  return (
    <div>
      <div className="flex items-center justify-between border-b border-gray-300 pt-4 pb-4">
        <p className="text-[#495057] text-[13px] font-[500]">Profile photo</p>
        <select
          className="border text-[13px] text-[#495057]  border-gray-600 rounded p-[2px] pr-2 "
          value={profileStatus}
          onChange={handleChange}
        >
          <option value="Everyone">Everyone</option>
          <option value="Nobody">Nobody</option>
          <option value="Selected">Selected</option>
        </select>
      </div>

      <div className="flex items-center justify-between border-b border-gray-300 pt-4 pb-4">
        <p className="text-[#495057] text-[13px] font-[500]">Last seen</p>
        <div>
          <button
            onClick={ChangeStatus}
            className={`w-[40px] cursor-pointer h-[16px] flex items-center rounded-full p-1 transition duration-300 ${
              isOpen ? 'bg-green-500' : 'bg-white border-2 border-gray-300'
            } `}
          >
            <div
              className={`w-[11px] h-[11px]  rounded-full shadow-md transform transition duration-300 ${
                isOpen
                  ? 'translate-x-5 bg-white'
                  : 'translate-x-0 bg-[#bfbfbf] '
              } `}
            />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-gray-300 pt-4 pb-4">
        <p className="text-[#495057] text-[13px] font-[500]">Status</p>
        <select
          className="border text-[13px] text-[#495057]  border-gray-600 rounded p-[2px] pr-2 "
          value={showStatus}
          onChange={handleStatus}
        >
          <option value="Everyone">Everyone</option>
          <option value="Nobody">Nobody</option>
          <option value="Selected">Selected</option>
        </select>
      </div>

      <div className="flex items-center justify-between border-b border-gray-300 pt-4 pb-4">
        <p className="text-[#495057] text-[13px] font-[500]">Read reciept</p>
        <div>
          <button
            onClick={changeOnlineStatus}
            className={`w-[40px] cursor-pointer h-[16px] flex items-center rounded-full p-1 transition duration-300 ${
              isOnline ? 'bg-green-500' : 'bg-white border-2 border-gray-300'
            } `}
          >
            <div
              className={`w-[11px] h-[11px]  rounded-full shadow-md transform transition duration-300 ${
                isOnline
                  ? 'translate-x-5 bg-white'
                  : 'translate-x-0 bg-[#bfbfbf] '
              } `}
            />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-gray-300 pt-4 pb-4">
        <p className="text-[#495057] text-[13px] font-[500]">Group</p>
        <select
          className="border text-[13px] text-[#495057]  border-gray-600 rounded p-[2px] pr-2 "
          value={allowGroup}
          onChange={chnageGroupPermission}
        >
          <option value="Everyone">Everyone</option>
          <option value="Nobody">Nobody</option>
          <option value="Selected">Selected</option>
        </select>
      </div>
    </div>
  );
};

export default Privacy;

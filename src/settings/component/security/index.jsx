import React, { useState } from 'react';

const Security = () => {
  const [isChecked, setisChecked] = useState(false);
  const toggleCheck = () => {
    setisChecked(!isChecked);
  };
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[#848A8D] text-[13px] font-[600]">
            {' '}
            Show security notification
          </p>
        </div>
        <div>
          <button
            onClick={toggleCheck}
            className={`w-[40px] h-[16px] flex items-center rounded-full p-1 transition duration-300 ${isChecked ? 'bg-green-500' : 'bg-white border-2 border-gray-200'}`}
          >
            <div
              className={` w-[11px] h-[11px] rounded-full shadow-md transform transition duration-300 ${isChecked ? 'translate-x-5  bg-white' : 'translate-x-0 bg-[#BFBFBF] '}`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Security;

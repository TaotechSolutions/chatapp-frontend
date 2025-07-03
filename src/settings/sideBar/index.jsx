import React, { useState } from 'react';
import Help from '../component/help';
import Themes from '../component/themes';
import Privacy from '../component/privacy';
import Security from '../component/security';
import PersonalInformation from '../component/personal Information';
import { FaCircleHalfStroke, FaUser } from 'react-icons/fa6';
import { IoIosLock } from 'react-icons/io';
import { IoShieldCheckmarkSharp } from 'react-icons/io5';
import { MdOutlineHelp } from 'react-icons/md';
import { ChevronDown, ChevronUp } from 'lucide-react';

const settingsItem = [
  { title: 'Personal Info', content: PersonalInformation, icon: <FaUser /> },
  { title: 'Themes', content: Themes, icon: <FaCircleHalfStroke /> },
  { title: 'Privacy', content: Privacy, icon: <IoIosLock /> },
  { title: 'Security', content: Security, icon: <IoShieldCheckmarkSharp /> },
  { title: 'Help', content: Help, icon: <MdOutlineHelp /> },
];

const SideBar = () => {
  const [toggleId, setToggleId] = useState(null);

  const toggleBar = id => {
    setToggleId(toggleId === id ? null : id);
  };

  return (
    <div className="overflow-auto">
      {settingsItem.map((item, id) => (
        <div key={id}>
          <div
            className="flex justify-between py-[7px] px-[10px] border-t mb-[2px] border-[#777C81] pt-2 pb-2 cursor-pointer"
            onClick={() => toggleBar(id)}
          >
            <div className="flex gap-[.4em] items-center text-[#777C81] text-[14px] font-[500]">
              {item.icon}
              {item.title}
            </div>
            <div className="text-[#777C81]">
              {toggleId === id ? <ChevronUp /> : <ChevronDown />}
            </div>
          </div>

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              toggleId === id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-2 px-4">{React.createElement(item.content)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SideBar;

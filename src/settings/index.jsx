import React from 'react';
import Background from './component/background';
import SideBar from './sideBar';

const SettingSideBar = () => {
  return (
    <div className="bg-white fixed w-full h-full overflow-auto md:w-[300px]">
      <Background />
      <SideBar />
    </div>
  );
};
export default SettingSideBar;

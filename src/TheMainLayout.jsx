import React from 'react';
import SettingSideBar from './(settings)';
import { Outlet } from 'react-router-dom';

const MainLayout = ({
  bgImages,
  setbgImages,
  bgimage,
  changeTheme,
  setchangeTheme,
  colours,
}) => {
  return (
    <div>
      <div
        className={`${changeTheme} w-full h-screen ${bgImages}`}
        style={{
          backgroundImage: `url(${bgImages})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <SettingSideBar
          bgimage={bgimage}
          setbgImages={setbgImages}
          setchangeTheme={setchangeTheme}
          colours={colours}
        />
      </div>
      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;

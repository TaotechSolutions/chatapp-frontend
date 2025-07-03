import React from 'react';
import SettingSideBar from '../settings';
import { Outlet } from 'react-router-dom';
import { useChangetheme } from '../settings/hooks/useChangetheme ';
import { useBgImages } from '../settings/hooks/useBgImages';

export default function MainLayout() {
  const { bgImages } = useBgImages();
  const { changeTheme } = useChangetheme();

  return (
    <>
      <div
        className={`${changeTheme} w-full ${bgImages}`}
        style={{
          backgroundImage: `url(${bgImages})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
      >
        <SettingSideBar />
      </div>
      <div className="flex items-center justify-center">
        <Outlet />
      </div>
    </>
  );
}

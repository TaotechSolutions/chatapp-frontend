import React from 'react';
import SettingSideBar from './(settings)';

const MainLayout = ( { bgImages, setbgImages, bgimage, changeTheme, setchangeTheme, colours }) => {
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
         
          
        
        <SettingSideBar bgimage={bgimage} setbgImages={setbgImages}  setchangeTheme={setchangeTheme} colours={colours}/>
      </div>
    </div>
  );
};

export default MainLayout;

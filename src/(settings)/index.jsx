import React from "react";
import Background from "./component/background";
import SideBar from "./sideBar";

const SettingSideBar = ({setbgImages, bgimage, bgImages, changeTheme, setchangeTheme, colours }) => {
  return (
    <div className="bg-white fixed w-full h-full md:w-[300px]">
      <Background />
      <SideBar setbgImages={setbgImages} bgimage={bgimage}  bgImages={bgImages}
                setchangeTheme={setchangeTheme}
                colours={colours}
                changeTheme={changeTheme}/>
    </div>
  );
};
export default SettingSideBar;

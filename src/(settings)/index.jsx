import React from "react";
import Background from "./component/background";
import SideBar from "./sideBar";

const SettingSideBar = ({
  changeTheme,
  setchangeTheme,
  colours,
  bgImages,
  setbgImages,
  bgimage,
}) => {
  return (
    <div className="bg-white fixed w-full h-full md:w-[300px]">
      <Background />
      <SideBar
        changeTheme={changeTheme}
        setchangeTheme={setchangeTheme}
        colours={colours}
        bgImages={bgImages}
        setbgImages={setbgImages}
        bgimage={bgimage}
      />
    </div>
  );
};

export default SettingSideBar;

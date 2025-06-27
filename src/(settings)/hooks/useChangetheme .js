import { useState } from "react";

export const useChangetheme = () => {
  const [changeTheme, setchangeTheme] = useState("bg-blue-400");
  const colours = [
    { id: "bg-[#4EAC6D] " },
    { id: "bg-blue-400" },
    { id: "bg-[#6153CC] " },
    { id: "bg-[#E83E8C] " },
    { id: "bg-[#EF476F] " },
    { id: "bg-[#797C8C] " },
  ];

  return {
    changeTheme,
    setchangeTheme,
    colours,
  };
};

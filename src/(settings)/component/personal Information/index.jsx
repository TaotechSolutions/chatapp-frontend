
import React, { useState } from "react";
import { HiPencil } from "react-icons/hi";

const PersonalInformation = () => {
  const [isEditing, setisEditing] = useState();
  return (
    <div>
      <div className="flex flex-col p-2 text-[#495057]">
        <div className="mb-3 flex justify-between"> 
           <div>
           <p className="text-[15px] font-[400]">Name</p>
          <h1 className="font-[500] text-[14px] ">Kathryn Swarey</h1>
         </div>
        <div className="bg-emerald-100 h-[30px] w-[30px] text-center flex items-center justify-center">
            <HiPencil className="text-emerald-400" />
        </div>
        </div>
        <div className="mb-2">
          <p className="text-[15px] font-[400]">adc@123.com</p>
          <h1 className="font-[500] text-[14px] ">Email</h1>
        </div>

        <div className="mb-2">
          <p className="text-[15px] font-[400] ">Location</p>
          <h1 className="font-[500] text-[14px] ">California, USA</h1>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;

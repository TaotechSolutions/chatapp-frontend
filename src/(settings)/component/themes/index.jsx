import React, { use } from "react";

import { useState } from "react";

const Themes = ({ changeTheme, setchangeTheme, colours, bgImages, setbgImages,bgimage}) => {
  return (
    <div>
      <div>
        <p className="text-[13px] mb-2 text-[#777C81]  font-[600] ">Choose Theme Color :</p>
        <div className="flex gap-2 mb-8"> 
          {colours.map((theme)=>(
          <button 
          key={theme.id}
          onClick={()=>setchangeTheme(theme.id)} 
          className={`w-[25px] h-[25px] rounded-full cursor-pointer ${theme.id}`}
          />
           
        ))}
        </div>
      </div>

 <div>
  <p className="text-[13px] mb-2 text-[#777C81] font-[600] ">Choose Theme Image :</p>
  <div className="flex gap-2 flex-wrap">
  {bgimage.map((patterns) => (
    <div
      key={patterns.id}
      onClick={() => setbgImages(patterns.id)} // ✅ Now sets the correct background image
      className={`w-[25px] h-[25px] rounded-full cursor-pointer ${patterns.id} border`}
      style={{
        backgroundImage: `url(${patterns.id})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      title={`Pattern preview`}
    />
  ))}
</div>

</div>




    </div>
  );
};

export default Themes;

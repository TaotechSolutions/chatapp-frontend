// hooks/useChangetheme.js (fixed typo from your import)
import React from "react";

const Themes = ({ bgImages, setbgImages, bgimage, changeTheme, setchangeTheme, colours }) => {
  console.log(bgimage, setbgImages, bgImages, changeTheme ,"kill")
  // CLARITY: Renamed variables to standard camelCase
  // const { colours, setchangeTheme } = useChangetheme();
  console.log(colours, "k")

  return (
    <div>
      {/* --- Color Theme Section --- */}
      <div>
        <p className="text-[13px] mb-2 text-[#777C81] font-[600]">
          Choose Theme Color:
        </p>
        <div className="flex gap-2 mb-8">
          {colours.map((color) => (
            <button
              key={color.id}
              onClick={() => setchangeTheme(color.id)}
              className={`w-[25px] h-[25px] rounded-full cursor-pointer transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${color.id}`}
              // ACCESSIBILITY: Describes the button's purpose to screen readers.
              // Assumes color.name exists, like 'Green', 'Blue', etc.
              aria-label={`Set theme to ${color.name || color.id}`}
            />
          ))}
        </div>
      </div>

      {/* --- Image Theme Section --- */}
      <div>
        <p className="text-[13px] mb-2 text-[#777C81] font-[600]">
          Choose Theme Image:
        </p>
        <div className="flex gap-2 flex-wrap">
          {bgimage.map((pattern) => (
            // BEST PRACTICE: Use a <button> for clickable actions for accessibility.
            <button
              key={pattern.id}
              onClick={() => setbgImages(pattern.id)}
              // ACCESSIBILITY: Describes the button's purpose.
              aria-label={`Set background to ${pattern.name || 'pattern'}`}
              className="w-[25px] h-[25px] rounded-full cursor-pointer border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              style={{
                backgroundImage: `url(${pattern.id})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;
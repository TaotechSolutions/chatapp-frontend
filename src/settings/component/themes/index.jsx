import { useBgImages } from '../../hooks/useBgImages';
import { useChangetheme } from '../../hooks/useChangetheme ';
import React from 'react';

const Themes = () => {
  const { setbgImages, bgimage } = useBgImages();
  const { setchangeTheme, colours } = useChangetheme();

  return (
    <div>
      {/* --- Color Theme Section --- */}
      <div>
        <p className="text-[13px] mb-2 text-[#777C81] font-[600]">
          Choose Theme Color:
        </p>
        <div className="flex gap-2 mb-8">
          {colours.map(color => (
            <button
              key={color.id}
              onClick={() => setchangeTheme(color.id)}
              className={`w-[25px] h-[25px] rounded-full cursor-pointer transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${color.id}`}
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
          {bgimage.map(pattern => (
            // BEST PRACTICE: Use a <button> for clickable actions for accessibility.
            <button
              key={pattern.id}
              onClick={() => setbgImages(pattern.id)}
              // ACCESSIBILITY: Describes the button's purpose.
              aria-label={`Set background to ${pattern.name || 'pattern'}`}
              className="w-[25px] h-[25px] rounded-full cursor-pointer border transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              style={{
                backgroundImage: `url(${pattern.id})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Themes;

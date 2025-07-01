
import React from 'react';
export default function SetStatus({handleSelect, duration, selectedLabel, setisOpen, isOpen}) {

  return (
    <div className="relative w-full max-w-sm mx-auto">
      <div
        className="w-full flex justify-between items-center bg-white text-black border px-4 py-2 rounded"
        onClick={() => setisOpen(!isOpen)}
      >
        {selectedLabel}
        <svg
          className="w-4 h-4 ml-2 transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div
        className={`absolute w-full bg-white border rounded shadow z-10 mt-1 transition-all duration-200 transform origin-top ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {duration.map((item, index) => (
          <button
          type='button'
            key={index}
            onClick={() => handleSelect(item)}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

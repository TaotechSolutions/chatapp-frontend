import React from "react";

function SearchInput({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder || "Search..."}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full p-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}

export default SearchInput;

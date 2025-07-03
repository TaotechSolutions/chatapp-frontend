import React from "react"

export default function EmptyState() {
  return(
    <div className="flex-1 flex flex-col items-center justify-center text-gray-400 ">
        <h3>This place is empty</h3>
        <p>Please pick a contact and start chatting!</p>
    </div>
  );
}
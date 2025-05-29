import React from "react";
import ChatBubble from "./components/ChatBubble";

const messages = [
  {
    text: "Hello world!",
    time: "05:00 AM",
    profilepic: "https://images.unsplash.com/photo-1746469570599-bcfe49acdc47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    sender: false
  },
  {
    text: "It's FIVE in the morning!",
    time: "05:06 AM",
    profilepic: "https://images.unsplash.com/photo-1747582422877-6a1aec3d3d33?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    status: "delivered",
    sender: true
  }
]

function App() {
  return (
    <div className="container mt-12">
      {messages.map((m, i)=> 
      (
        <ChatBubble key={i} 
        message = {m}
        isSender={m.sender}
        />
      ))}
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <>
//       <h1 className="flex items-center justify-center min-h-screen bg-darkPrimary text-center font-bold text-darkText text-4xl font-poppins">
//         Welcome to Taotech Solutions 
//       </h1>
//     </>
//   );
// }

// export default App;

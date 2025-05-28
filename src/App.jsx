import { use, useState } from "react";
import Message from "./components/Message";

function App() {
  // const [user, setUser] = useState("");

  return (
    <div className="flex flex-col gap-5">
      <Message />
      <Message />
      <Message />
      <Message type="user"/>
      <Message />
      <Message />
      <Message />
      <Message type="user"/>
    </div>
  );
}

export default App;

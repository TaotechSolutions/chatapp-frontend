import MessageInput from "./MessageInput";

function App() {
  const handleSend = ({ message, file }) => {
    // TODO: handle sending message and file
    alert(`Message: ${message}\nFile: ${file ? file.name : "None"}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-darkPrimary text-darkText font-poppins">
      <h1 className="text-center font-bold text-4xl py-8">
        Welcome to Taotech Solutions
      </h1>
      <div className="flex-1" />
      <MessageInput onSend={handleSend} />
    </div>
  );
}

export default App;

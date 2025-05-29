import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`flex flex-row items-center justify-center relative `}>
      <h1 className="flex items-center justify-center min-h-screen bg-darkPrimary text-center font-bold text-darkText text-4xl font-poppins">
        Welcome to Taotech Solutions
      </h1>
      <button onClick={toggleTheme} className="bg-red-600 text-white">theme</button>
    </div>
  );
}

export default App;

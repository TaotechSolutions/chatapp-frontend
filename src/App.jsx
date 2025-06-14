import { useTheme } from "./context/ThemeContext";

import NotificationBell from "./components/NotificationBell";
import SettingSideBar from "./(settings)";
import ChangePasswordForm from "./(settings)/component/themes";
import { useChangetheme } from "./(settings)/hooks/useChangetheme ";
import { useBgImages } from "./(settings)/hooks/useBgImages";

function App() {
  const { theme, toggleTheme } = useTheme();
  const { changeTheme, setchangeTheme, colours } = useChangetheme();

  const { bgImages, setbgImages, bgimage } = useBgImages();
  return (
    <div
      className={`${changeTheme} w-full h-screen ${bgImages}`}
      style={{
        backgroundImage: `url(${bgImages})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <SettingSideBar
        changeTheme={changeTheme}
        setchangeTheme={setchangeTheme}
        colours={colours}
        bgImages={bgImages}
        setbgImages={setbgImages}
        bgimage={bgimage}
      />
      <div className={`flex flex-row items-center justify-center relative `}>
        <button onClick={toggleTheme} className="bg-red-600 text-white">
          theme
        </button>
      </div>
      <NotificationBell />
    </div>
  );
}

export default App;

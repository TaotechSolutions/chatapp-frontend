import ProfileBackground from "./component/ProfileBackground";
import ProfileInfo from "./component/ProfileInfo";
import Media from "./component/Media";
import AttachedFiles from "./component/AttachedFiles";

function App() {
  return (
    <>
      {/* <h1 className="flex items-center justify-center min-h-screen bg-darkPrimary text-center font-bold text-darkText text-4xl font-poppins">
        Welcome to Taotech Solutions 
      </h1> */}
      <div>
        <div>
          <ProfileBackground />
          <ProfileInfo />
        </div>
        <Media />
        <AttachedFiles />
      </div>
    </>
  );
}

export default App;

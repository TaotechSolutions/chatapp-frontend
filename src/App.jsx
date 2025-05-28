import ProfileBackground from "./component/ProfileBackground";
import ProfileInfo from "./component/ProfileInfo";

function App() {
  return (
    <>
      {/* <h1 className="flex items-center justify-center min-h-screen bg-darkPrimary text-center font-bold text-darkText text-4xl font-poppins">
        Welcome to Taotech Solutions 
      </h1> */}
      <div>
        <ProfileBackground />
        <ProfileInfo />
      </div>
    </>
  );
}

export default App;

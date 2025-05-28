import Profile from "./component/Profile";
import ProfileInfo from "./component/ProfileInfo";

function App() {
  return (
    <>
      {/* <h1 className="flex items-center justify-center min-h-screen bg-darkPrimary text-center font-bold text-darkText text-4xl font-poppins">
        Welcome to Taotech Solutions 
      </h1> */}
      <div>
        <Profile />
        <ProfileInfo />
      </div>
    </>
  );
}

export default App;

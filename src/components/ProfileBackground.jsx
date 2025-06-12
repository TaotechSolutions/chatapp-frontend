import { SlOptionsVertical } from "react-icons/sl";
import ProfileDetails from "./ProfileDetails";

function ProfileBackground() {
  return (
    <div>
      <div className="h-[12rem] relative">
        <img
          className="w-full h-full object-cover  "
          src="/images/Royal.jpg"
          alt=""
        />
        <div className="absolute top-0 right-0 left-0 text-zinc-50 flex justify-between p-3">
          <p>My Profile</p>
          <SlOptionsVertical />
        </div>
        <ProfileDetails />
      </div>
    </div>
  );
}

export default ProfileBackground;

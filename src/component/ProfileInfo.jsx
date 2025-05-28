import { AiOutlineMessage } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GoPerson } from "react-icons/go";

const ProfileInfo = () => {
  return (
    <div className=" px-6 font-medium text-[17px] text-zinc-500 border-b border-zinc-300 pb-7 flex flex-col gap-7">
      <p className="text-center">
        If several languages coalesce, the grammer of the resulting language is
        more simple.
      </p>

      <div className="flex gap-6 items-center text-center">
        <GoPerson />
        <p>Adam Zampa</p>
      </div>
      <div className="flex gap-6 items-center text-center">
        <AiOutlineMessage />
        <p>admin@themebrand.com</p>
      </div>

      <div className="flex gap-6 items-center text-center">
        <GoLocation />
        <p> California</p>
      </div>
    </div>
  );
};

export default ProfileInfo;

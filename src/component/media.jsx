const Media = () => {
  return (
    <div className="px-6 space-y-5">
      <div className="font-medium text-[17px] text-zinc-500 flex justify-between mt-10">
        <p>MEDIA</p>
        <a href="" className="text-green-700 font-light">
          Show all
        </a>
      </div>
      <ul className="flex gap-2  ">
        <li className="w-[100px] h-[100px] rounded-[5px] overflow-hidden">
          <img
            src="mediaImg/img1.jpg"
            alt=""
            className="w-full h-full object-cover  "
          />
        </li>
        <li className="w-[100px] h-[100px] rounded-[5px] overflow-hidden">
          <img
            src="mediaImg/img2.jpg"
            alt=""
            className="w-full h-full object-cover "
          />
        </li>
        <li className="w-[100px] h-[100px] rounded-[5px] overflow-hidden flex justify-center items-center relative">
          <div className="absolute inset-0 bg-black opacity-70"></div>
          <div className="absolute z-10 text-white text-xl ">+12</div>
          <img
            src="mediaImg/img3.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </li>
      </ul>
    </div>
  );
};

export default Media;

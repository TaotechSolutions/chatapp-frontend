function Round() {
  return (
    <div className="relative flex flex-col items-center border-b border-zinc-300 gap-4 pb-7 -top-10">
      <div className=" w-[100px] h-[100px] rounded-full overflow-hidden border-5 border-zinc-50">
        <img
          className=" w-full h-full object-cover"
          src="/images/selfie.jpg"
          alt=""
        />
      </div>
      <div className="text-center">
        <p className="font-bold text-[18px] text-zinc-600">Adam Zampa</p>
        <span className="font-medium text-[16px] text-zinc-400">Frontend Developer</span>
      </div>
    </div>
  );
}
export default Round;


import File from "./File";

const AttachedFiles = () => {
  return (
    <div className="px-6 py-9 font-medium text-[17px] text-zinc-500">
      <div className="">ATTACHED FILES</div>
      <ul className="flex flex-col gap-2 mt-5">
        <File type="file"/>
        <File/>
        <File type="file"/>
        <File/>
      </ul>
    </div>
  );
};

export default AttachedFiles;

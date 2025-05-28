import { IoDocumentOutline } from "react-icons/io5";
import { FaArrowDown } from "react-icons/fa";
import { PiDotsThreeBold } from "react-icons/pi";
import { FaRegImage } from "react-icons/fa6";


export default function File({ type }) {
  const documentType = type === "file" ? <IoDocumentOutline /> : <FaRegImage />
  return (
    <li className="flex border border-zinc-300 p-5 justify-between items-center">
      <div className="bg-emerald-100 h-8 w-8 flex items-center justify-center rounded-full">{documentType}</div>
      <p>design-phase-1-approved.pdf</p>
      <FaArrowDown />
      <PiDotsThreeBold />
    </li>
  );
}

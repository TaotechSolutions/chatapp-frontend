import { FaRegTimesCircle } from 'react-icons/fa';

export default function NotificationBell() {
  return (
    <div className="w-[400px] mx-auto bg-zinc-100 p-4 mt-4 divide-y divide-zinc-200">
      <div className="flex justify-between items-center mb-3 pb-3">
        <div className="flex gap-2 items-center">
          <p className="mb-0 font-semibold text-xl">Notification</p>
          <span className="w-5 h-5 bg-green-500 text-zinc-50 rounded-full flex items-center justify-center">
            3
          </span>
        </div>
        <button>
          <FaRegTimesCircle className="text-zinc-400" />
        </button>
      </div>
      {/* <div className="">You have successfully Logged in into your account</div> */}
      <p className="text-[16px]-gray-800 font-[400] py-[10px]">
        You have successfully logged in to your account.
      </p>
      <p className="text-[16px]-gray-800 font-[400] py-[10px]">
        You have successfully logged out of your account.
      </p>

      {/* <div className="bg-green-100 text-green-800 px-4 py-3 rounded-lg shadow-md border border-green-300">
  You have successfully logged in to your account.
</div> */}
    </div>
  );
}

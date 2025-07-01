// import React, { useState } from 'react';
// import { Button } from '../components/ui/button';
// import {
//   Dialog,
//   DialogTrigger,
//   DialogClose,
//   DialogContent,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
// } from '../components/ui/dialog';
// import { Input } from '../components/ui/input';
// import { Label } from '../components/ui/label';
// import SetStatus from './SetStatus';
// import { useChangeStatusStore } from '../store/useChangeStatusStore';

// const suggestedStatuses = [
//   'Available 😊',
//   'Busy 🚫',
//   'In a meeting 📞',
//   'Sleeping 😴',
//   'On vacation 🏖️',
// ];

// const ActivityStatusButton = () => {
//   const { newStatus } = useChangeStatusStore();
//   const [inpVal, setinpVal] = useState('');
//   const [endTime, setendTime] = useState();
//   const [selectedLabel, setselectedLabel] = useState('Set Status Time');
// const [isOpen, setisOpen] = useState(false)
//   const duration = [
//     { label: "Don't Clear", ms: null },
//     { label: '30 minutes', ms: 30 * 60 * 1000 },
//     { label: '1 hour', ms: 60 * 60 * 1000 },
//     { label: '4 hours', ms: 4 * 60 * 60 * 1000 },
//     { label: 'Today', ms: 24 * 60 * 60 * 1000 },
//   ];

//   const handleSelect = (durations) => {
//     const end = durations.ms ? Date.now() + durations.ms : null;
//     setendTime(end);
//     setselectedLabel(durations.label);
//     setisOpen(false)
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("✅ Submitted:", inpVal, endTime);
//     newStatus(inpVal, endTime);
//     alert(`${inpVal} set until ${endTime ? new Date(endTime).toLocaleString() : 'No expiry'}`);
//   };

//   return (
//     <div>
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button variant="outline">Open Dialog</Button>
//         </DialogTrigger>
//    <DialogContent className="sm:max-w-[425px]">
//         <form onSubmit={handleSubmit}>
//             <DialogHeader className="mb-3">
//               <DialogTitle className="font-bold text-[22px]">Set Status</DialogTitle>
//             </DialogHeader>

//             <div className="grid gap-4">
//               <div className="grid gap-3">
//                 <Input
//                   id="status-input"
//                   name="Status"
//                   placeholder="Enter your status"
//                   value={inpVal}
//                   onChange={(e) => setinpVal(e.target.value)}
//                 />
//               </div>

//               <div className="space-y-2">
//                 <p className="text-sm text-muted-foreground">Suggested:</p>
//                 <div className="flex flex-wrap gap-2">
//                   {suggestedStatuses.map((status, i) => (
//                     <Button
//                       key={i}
//                       variant="secondary"
//                       size="sm"
//                       type="button"
//                       onClick={() => setinpVal(status)}
//                     >
//                       {status}
//                     </Button>
//                   ))}
//                 </div>
//               </div>

//               <div className="grid gap-3 mb-4">
//                 <Label htmlFor="time">Remove status after...</Label>
//                 <SetStatus
//                   duration={duration}
//                   selectedLabel={selectedLabel}
//                   handleSelect={handleSelect}
//                   setisOpen = {setisOpen}
//                   isOpen = {isOpen}
//                 />
//               </div>
//             </div>

//             <DialogFooter>
//               <DialogClose asChild>
//                 <Button type="button" variant="outline">Cancel</Button>
//               </DialogClose>
//             <DialogClose asChild>
//                   <Button type="submit">Save changes</Button>
//             </DialogClose>
//             </DialogFooter>
//         </form>
//           </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default ActivityStatusButton;


import React, { useState } from "react";
// import { useDispatch } from "react-redux";
import { newStatus } from "../store/statusSlice";
import SetStatus from "./SetStatus"; // your pure React dropdown
import { useDispatch } from "react-redux";

const suggestedStatuses = [
  "Available 😊",
  "Busy 🚫",
  "In a meeting 📞",
  "Sleeping 😴",
  "On vacation 🏖️",
];

const ActivityStatusButton = () => {
  const dispatch = useDispatch();
  const [inpVal, setInpVal] = useState("");
  const [endTime, setEndTime] = useState();
  const [selectedLabel, setSelectedLabel] = useState("Set Status Time");
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const duration = [
    { label: "Don't Clear", ms: null },
    { label: "30 minutes", ms: 30 * 60 * 1000 },
    { label: "1 hour", ms: 60 * 60 * 1000 },
    { label: "4 hours", ms: 4 * 60 * 60 * 1000 },
    { label: "Today", ms: 24 * 60 * 60 * 1000 },
  ];

  const handleSelect = (durations) => {
    const end = durations.ms ? Date.now() + durations.ms : null;
    setEndTime(end);
    setSelectedLabel(durations.label);
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(newStatus({ status: inpVal, expiresAt: endTime }));
    alert(`${inpVal} set until ${endTime ? new Date(endTime).toLocaleString() : 'No expiry'}`);
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setShowModal(true)}
        className="bg-gray-100 border px-4 py-2 rounded"
      >
        Open Status Dialog
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-full max-w-md shadow">
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-bold mb-4">Set Status</h2>

              <input
                type="text"
                placeholder="Enter your status"
                value={inpVal}
                onChange={(e) => setInpVal(e.target.value)}
                className="w-full border px-3 py-2 mb-3 rounded"
              />

              <div className="mb-4">
                <p className="text-sm text-gray-600 mb-2">Suggested:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedStatuses.map((status, i) => (
                    <button
                      key={i}
                      type="button"
                      className="bg-gray-200 px-3 py-1 rounded text-sm"
                      onClick={() => setInpVal(status)}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Remove status after...
                </label>
                <SetStatus
                  duration={duration}
                  selectedLabel={selectedLabel}
                  handleSelect={handleSelect}
                  isOpen={isOpen}
                  setisOpen={setIsOpen}
                />
              </div>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="border px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityStatusButton;

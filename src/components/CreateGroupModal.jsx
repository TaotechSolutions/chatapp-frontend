import React from "react";

function CreateGroupModal({
  isOpen,
  onClose,
  onCreate,
  groupName,
  setGroupName,
  selectedContacts,
}) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-white rounded shadow-lg w-[400px] border border-gray-200">
        {/* Header */}
        <div className="bg-green-600 text-white px-4 py-3 rounded-t flex justify-between items-center">
          <h2 className="text-lg font-semibold">Create Group</h2>
          <button onClick={onClose} className="text-white text-xl font-bold">
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Group Name
            </label>
            <input
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="w-full mt-1 p-2 border border-gray-300 rounded"
            />
          </div>
          <p className="text-sm text-gray-600">
            {selectedContacts.length} contact(s) selected
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 p-4 border-t">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-100"
          >
            Close
          </button>
          <button
            onClick={onCreate}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Create Group
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateGroupModal;

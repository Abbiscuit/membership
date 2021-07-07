import React from 'react';

const GroupButton = () => {
  return (
    <div className="flex flex-row px-2 py-2 space-x-2 border border-gray-700 rounded-md dark:bg-[#111]">
      <button className="px-4 py-2 dark:text-white rounded-md dark:bg-gray-800 min-w-[144px]">
        Monthly
      </button>
      <button className="px-4 py-2 dark:text-white rounded-md dark:bg-gray-800 min-w-[144px]">
        Yearly
      </button>
    </div>
  );
};

export default GroupButton;

import classNames from 'classnames';
import React, { VFC } from 'react';

interface Props {
  onSelect: (term: string) => void;
  isMonthly: boolean;
}

const GroupButton: VFC<Props> = ({ onSelect, isMonthly }) => {
  return (
    <div className="flex flex-row px-2 py-2 space-x-2 border border-gray-700 rounded-md dark:bg-[#111]">
      <button
        onClick={() => onSelect('monthly')}
        className={classNames(
          'px-4 py-2 dark:text-white rounded-md dark:bg-none min-w-[144px]',
          isMonthly && 'dark:bg-gray-800'
        )}
      >
        Monthly
      </button>
      <button
        onClick={() => onSelect('yearly')}
        className={classNames(
          'px-4 py-2 dark:text-white rounded-md dark:bg-none min-w-[144px]',
          !isMonthly && 'dark:bg-gray-800'
        )}
      >
        Yearly
      </button>
    </div>
  );
};

export default GroupButton;

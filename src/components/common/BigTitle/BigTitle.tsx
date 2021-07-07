import React, { VFC } from 'react';

interface Props {
  title?: string;
  description?: string;
}

const BigTitle: VFC<Props> = ({
  title = 'Pricing Plans',
  description = 'Start building for free, then add a site plan to go live.',
}) => {
  return (
    <div className="flex flex-col items-center space-y-4 text-center">
      <h1 className="font-bold text-gray-900 text-7xl dark:text-white">
        {title}
      </h1>

      {description && (
        <p className="text-lg leading-loose text-gray-900 dark:text-white">
          {description}
        </p>
      )}
    </div>
  );
};

export default BigTitle;

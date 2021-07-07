import React, { VFC } from 'react';
import { Button } from '../../ui';
import { Plans } from './PricingSection';

interface Props {
  buttonLabel: string;
  title: string;
  description: string;
  price: string | number;
  onClick?: (plan: Plans) => void;
  plan: Plans;
}

const PlanCard: VFC<Props> = ({
  buttonLabel,
  title,
  description,
  price,
  plan,
  onClick,
}) => {
  return (
    <div className="dark:bg-[#111] px-4 py-4 rounded-md">
      <div>
        <h2 className="mb-2 text-3xl font-bold dark:text-white">{title}</h2>
        <p className="mb-2 dark:text-white">{description}</p>
      </div>
      <div className="flex flex-row items-end mb-2 space-x-1">
        <span className="text-4xl font-bold dark:text-white">${price}</span>
        <span className="dark:text-white">/month</span>
      </div>
      <div>
        <Button onClick={() => onClick(plan)}>{buttonLabel}</Button>
      </div>
    </div>
  );
};

export default PlanCard;

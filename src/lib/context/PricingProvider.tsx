import React, { ReactNode, VFC, createContext, useState } from 'react';

import { Plan } from '@/types';
import { useContext } from 'react';

interface Props {
  children: ReactNode;
}

interface ContextInterface {
  onSelect: (term: 'monthly' | 'yearly') => void;
  isMonthly: boolean;
  // plans: Plan[];
  plans: Plan[];
}

export const PricingContext = createContext<ContextInterface>(null);

const initialPlans: Plan[] = [
  {
    id: 1,
    title: 'Hobby',
    description: 'All the basics for staring a new business',
    price: 12,
  },
  {
    id: 2,
    title: 'Freelancer',
    description: 'All the basics for staring a new business',
    price: 24,
  },
  {
    id: 3,
    title: 'Startup',
    description: 'All the basics for staring a new business',
    price: 32,
  },
  {
    id: 4,
    title: 'Enterprise',
    description: 'All the basics for staring a new business',
    price: 48,
  },
];

const PricingProvider: VFC<Props> = ({ children }) => {
  const [isMonthly, setIsMonthly] = useState(true);

  const handleSelect = (term: 'monthly' | 'yearly') => {
    if (term === 'monthly') {
      setIsMonthly(true);
    } else if (term === 'yearly') {
      setIsMonthly(false);
    } else {
      setIsMonthly(false);
    }
  };

  const plans = isMonthly
    ? initialPlans
    : initialPlans.map(plan => {
        return {
          ...plan,
          price: Math.floor(plan.price * 0.9),
        };
      });

  return (
    <PricingContext.Provider
      value={{ onSelect: handleSelect, isMonthly, plans }}
    >
      {children}
    </PricingContext.Provider>
  );
};

export default PricingProvider;

export const usePricing = () => useContext(PricingContext);

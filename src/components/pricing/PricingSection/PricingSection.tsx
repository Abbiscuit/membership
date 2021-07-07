import { useRouter } from 'next/router';
import React from 'react';

import { BigTitle } from '@/components/common';
import { GroupButton } from '@/components/ui';
import PlanCard from './PlanCard';

export type Plans = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export const plans: Plans[] = [
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

const auth = true;

const PricingSection = () => {
  const router = useRouter();

  const handleSubscribe = (plan: Plans) => {
    if (!auth) {
      router.replace('/signin');
    } else {
      alert(
        'StripeのCheckoutフォームまたはそれぞれに対応した入力フォームが表示される'
      );
      alert(
        '入力が完了したら /account などのプロフィール画面へ遷移し、プランの確認画面へ'
      );
      router.replace(`/account/${plan.id}`);
      console.log(plan);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <BigTitle />
        <GroupButton />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {plans.map(plan => (
          <PlanCard
            key={plan.id}
            title={plan.title}
            description={plan.description}
            price={plan.price}
            buttonLabel="Subscription"
            onClick={handleSubscribe}
            plan={plan}
          />
        ))}
      </div>
    </>
  );
};

export default PricingSection;

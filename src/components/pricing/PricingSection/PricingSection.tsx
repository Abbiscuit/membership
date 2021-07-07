import React from 'react';
import { useRouter } from 'next/router';

import { BigTitle } from '@/components/common';
import { GroupButton } from '@/components/pricing';
import PlanCard from './PlanCard';

import { Plan } from '@/types';
import { usePricing } from '@/lib/context/PricingProvider';

const auth = true;

const PricingSection = () => {
  const router = useRouter();
  const { isMonthly, plans, onSelect } = usePricing();

  const handleSubscribe = (plan: Plan) => {
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
    }
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <BigTitle />
        <GroupButton onSelect={onSelect} isMonthly={isMonthly} />
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

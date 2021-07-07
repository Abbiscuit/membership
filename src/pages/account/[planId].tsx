import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { plans } from '@/components/pricing/PricingSection/PricingSection';
import { Section } from '@/components/ui';
import { BigTitle } from '@/components/common';
import { CheckoutForm } from '@/components/stripe';

const AccountPage: NextPage = props => {
  const stripeApiKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLIC}`;
  const stripePromise = loadStripe(stripeApiKey);
  const router = useRouter();

  const { planId } = router.query;

  const selectedPlan = plans.filter(plan => plan.id === +planId);

  return (
    <Section>
      <BigTitle
        title={`Account`}
        description="We partnered with Stripe for a simplified billing."
      />

      {selectedPlan.map(item => (
        <div key={item.id} className="flex flex-col w-full space-y-4">
          <h3 className="text-4xl font-bold dark:text-white">
            {item.title} Plan
          </h3>
          <p className="text-xl dark:text-white">
            <span className="mr-1 text-4xl font-bold">${item.price}</span>/month
          </p>
        </div>
      ))}

      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm plan={selectedPlan[0]} />
        </Elements>
      </div>
    </Section>
  );
};

export default AccountPage;

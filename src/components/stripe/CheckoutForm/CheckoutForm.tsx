import React, { FormEvent, VFC } from 'react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';

import { Plans } from '@/components/pricing/PricingSection/PricingSection';
import { Button } from '@/components/ui';

const CheckoutForm: VFC<{ plan: Plans }> = ({ plan }) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    // intentを作るエンドポイントに金額を送る
    const res = await fetch('/api/payment', {
      method: 'POST',
      body: JSON.stringify({ amount: plan.price * 100 }), // req.body.amount
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    const secret = data.client_secret;

    const card = elements.getElement(CardElement); // tokenを使ってintentを実行

    const result = await stripe.confirmCardPayment(secret, {
      payment_method: {
        card: card,
        billing_details: {
          name: 'hirohiro',
        },
      },
    });

    if (result.error) {
      /**
       * 決済の失敗
       * * api_connection_error
       * * api_error
       * * authentication_error
       * * card_error
       * * and so on...
       */
      console.log(result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert('payment success!!');
        console.log('payment success!!');
        router.replace('/service');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-4 py-4 bg-white">
      <label htmlFor="plan">
        {plan && plan.title}
        <CardElement options={{ hidePostalCode: true }} />
      </label>
      <Button>支払う</Button>
    </form>
  );
};

export default CheckoutForm;

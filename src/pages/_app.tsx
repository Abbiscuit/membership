import React from 'react';
import { PricingProvider } from '@/lib/context';

import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <PricingProvider>
      <Component {...pageProps} />
    </PricingProvider>
  );
}

export default MyApp;

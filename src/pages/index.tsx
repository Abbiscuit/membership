import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';

import { Section } from '@/components/ui';
import { PricingSection } from '@/components/pricing';

const HomePage: NextPage = () => {
  return (
    <Section>
      <Head>
        <title>Home Page</title>
      </Head>
      <PricingSection />
    </Section>
  );
};

export default HomePage;

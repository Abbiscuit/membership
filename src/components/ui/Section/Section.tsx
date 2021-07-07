import React, { ReactNode, VFC } from 'react';

const Section: VFC<{ children: ReactNode }> = ({ children }) => {
  return (
    <section className="flex flex-col min-h-screen space-y-8 bg-black">
      {children}
    </section>
  );
};

export default Section;

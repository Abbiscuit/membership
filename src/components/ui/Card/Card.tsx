import { ReactNode, VFC } from 'react';

interface Card {
  href?: string;
  className?: string;
  children: ReactNode;
}

const Card = (props: Card) => {
  return (
    <a
      href={props.href}
      className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
    >
      {props.children}
    </a>
  );
};

Card.Title = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-2xl font-bold dark:text-white">{children}</h3>;
};

Card.Description = ({ children }: { children: ReactNode }) => {
  return <p className="mt-4 text-xl dark:text-white">{children}</p>;
};

export default Card;

import classNames from 'classnames';
import { MouseEventHandler, ReactNode, VFC } from 'react';

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler;
}

const Button: VFC<Props> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'px-6 py-2 text-white bg-blue-700 rounded active:bg-blue-800 focus:outline-none focus:ring focus:ring-offset-1'
      )}
    >
      {children}
    </button>
  );
};

export default Button;

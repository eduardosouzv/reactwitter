import { ReactElement } from 'react';

interface ITweetButton {
  children: string;
  classNamePosition: string;
  onClick: () => void;
}

export default function TweetButton({ children, classNamePosition, onClick }
  : ITweetButton):ReactElement<HTMLButtonElement> {
  return (
    <button
      className={`border-0 rounded-full bg-blue-400
      text-white font-bold ${classNamePosition}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

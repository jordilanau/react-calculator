import { MouseEvent } from 'react';
import { ButtonProps } from './Button.types';

export const Button = ({ value, span }: ButtonProps) => {
  const spanValues = {
    1: 'col-span-1',
    2: 'col-span-2',
  };

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value);
  };

  return (
    <button
      type='button'
      className={`${spanValues[span]} bg-blue-200 px-2 py-3 bg-opacity-50 hover:bg-blue-50`}
      value={value}
      onClick={onClick}>
      {value}
    </button>
  );
};

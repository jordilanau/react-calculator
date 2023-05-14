import { MouseEvent, useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { ButtonProps } from './Button.types';

export const Button = ({ value, span, type }: ButtonProps) => {
  const { addDigit, chooseOperation, clear, deleteDigit, evaluate } = useContext(AppContext);

  const spanValues = {
    1: 'col-span-1',
    2: 'col-span-2',
  };

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;

    switch (type) {
      case 'digit':
        addDigit(value);
        break;
      case 'operation':
        switch (value) {
          case 'AC':
            clear();
            break;
          case 'DEL':
            deleteDigit();
            break;
          case '=':
            evaluate();
            break;
          default:
            chooseOperation(value);
            break;
        }
        break;
    }
  };

  return (
    <button
      type='button'
      className={`${spanValues[span]} !bg-blue-200 px-2 py-3 bg-opacity-50 hover:!bg-blue-50`}
      value={value}
      onClick={onClick}>
      {value}
    </button>
  );
};

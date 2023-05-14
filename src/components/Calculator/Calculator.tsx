import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import keys from '../../data/keys';
import { Display } from '../Display/Display';
import { KeyGrid } from '../KeyGrid/KeyGrid';

export const Calculator = () => {
  const { currentOperand, previousOperand, operation } = useContext(AppContext);
  const previous = (previousOperand + ' ' + operation).trim();

  return (
    <div className='grid gap-1 max-w-xs bg-white p-3 border-4 border-black'>
      <Display previous={previous} current={currentOperand} />
      <KeyGrid keys={keys} />
    </div>
  );
};

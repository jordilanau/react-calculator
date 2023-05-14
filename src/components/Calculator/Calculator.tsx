import { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import keys from '../../data/keys';
import { Display } from '../Display/Display';
import { KeyGrid } from '../KeyGrid/KeyGrid';

export const Calculator = () => {
  const { currentOperand, previousOperand, operation } = useContext(AppContext);

  return (
    <div className='grid gap-1 max-w-xs bg-white p-3 border-4 border-black'>
      <Display previous={`${previousOperand} ${operation}`} current={currentOperand} />
      <KeyGrid keys={keys} />
    </div>
  );
};

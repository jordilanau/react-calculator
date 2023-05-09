import keys from '../../data/keys';
import { Display } from '../Display/Display';
import { KeyGrid } from '../KeyGrid/KeyGrid';

export const Calculator = () => {
  return (
    <div className='grid gap-1 max-w-xs bg-white p-3 border-4 border-black'>
      <Display previous='' current='' />
      <KeyGrid keys={keys} />
    </div>
  );
};

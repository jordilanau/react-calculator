import keys from '../../data/keys';
import { Display } from '../Display/Display';
import { KeyGrid } from '../KeyGrid/KeyGrid';

export const Calculator = () => {
  return (
    <div className='grid max-w-[250px] gap-1'>
      <Display previous='' current='' />
      <KeyGrid keys={keys} />
    </div>
  );
};

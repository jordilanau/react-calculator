import { Button } from '../Button/Button';
import { KeyGridProps } from './KeyGrid.types';

export const KeyGrid = ({ keys }: KeyGridProps) => {
  return (
    <div className='grid grid-cols-4 w-full gap-1 bg-transparent'>
      {keys.map((key) => (
        <Button key={key.value} span={key.span} value={key.value} />
      ))}
    </div>
  );
};

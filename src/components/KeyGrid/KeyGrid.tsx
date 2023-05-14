import { Button } from '../Button/Button';
import { KeyGridProps } from './KeyGrid.types';

export const KeyGrid = ({ keys }: KeyGridProps) => {
  return (
    <div className='grid grid-cols-4 w-full gap-1 bg-transparent'>
      {keys.map((key) => {
        switch (key.type) {
          case 'digit':
            return <Button key={key.value} span={key.span} value={key.value} type='digit' />;
          case 'operation':
            return <Button key={key.value} span={key.span} value={key.value} type='operation' />;
        }
      })}
    </div>
  );
};

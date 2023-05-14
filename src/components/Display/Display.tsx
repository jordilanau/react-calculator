import { DisplayProps } from './Display.types';

export const Display = ({ previous, current }: DisplayProps) => {
  return (
    <div className='bg-slate-900 w-full py-1 px-2 flex flex-col justify-between break-all min-h-[48px]'>
      <div className='text-white text-xs text-right' data-testid='previousOperand'>
        {previous}
      </div>
      <div className='text-white text-right' data-testid='currentOperand'>
        {current}
      </div>
    </div>
  );
};

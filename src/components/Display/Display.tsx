import { DisplayProps } from './Display.types';

export const Display = ({ previous, current }: DisplayProps) => {
  return (
    <div className='bg-slate-900 w-full py-1 px-2 flex flex-col justify-between break-all min-h-[48px]'>
      <div className='text-white text-xs text-right'>{previous}</div>
      <div className='text-white text-right'>{current}</div>
    </div>
  );
};

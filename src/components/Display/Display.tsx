import { DisplayProps } from './Display.types';

export const Display = ({ previous, current }: DisplayProps) => {
  return (
    <div className='bg-slate-900 w-full col-span-12 py-1 px-2 flex flex-col justify-between break-all'>
      <div className='text-white text-xs text-right'>{previous}</div>
      <div className='text-white text-right'>{current}</div>
    </div>
  );
};

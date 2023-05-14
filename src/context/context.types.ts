import { PropsWithChildren } from 'react';

export type AppStateType = {
  previousOperand: string;
  currentOperand: string;
  operation: string;
  addDigit: (input: string) => void;
};

export type AppProviderTypeProps = PropsWithChildren;

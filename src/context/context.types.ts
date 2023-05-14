import { PropsWithChildren } from 'react';

export type AppStateType = {
  previousOperand: string;
  currentOperand: string;
  operation: string;
  addDigit: (input: string) => void;
  deleteDigit: () => void;
  chooseOperation: (operation: string) => void;
  clear: () => void;
};

export type AppProviderTypeProps = PropsWithChildren;

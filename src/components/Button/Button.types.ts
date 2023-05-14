import { ComponentProps } from 'react';

type DigitProps = {
  /**
   * The value of the given button
   */
  value: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.';
};

type OperationProps = {
  /**
   * The value of the given button
   */
  value: '+' | '-' | '*' | '/' | '=' | 'AC' | 'DEL';
};

export type KeyProps = (
  | {
      type: 'digit';
      value: DigitProps['value'];
    }
  | {
      type: 'operation';
      value: OperationProps['value'];
    }
) & {
  /**
   * The span of the given button in columns
   */
  span: '1' | '2';
};

/**
 * Props to be omitted to remove duplicates
 */
type PropsToOmit = keyof KeyProps | 'className' | 'children';

/**
 * The ButtonProps
 */
export type ButtonProps<T extends React.ElementType = 'button'> = KeyProps & Omit<ComponentProps<T>, PropsToOmit>;

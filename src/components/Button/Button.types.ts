import { ComponentProps } from 'react';

/**
 * Custom props
 */
type CustomButtonProps = {
  /**
   * The value of the given button
   */
  value: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '.' | '+' | '-' | '*' | '/' | '=' | 'AC' | 'DEL';

  /**
   * The columns to span
   */
  span: '1' | '2';
};

/**
 * Props to be omitted to remove duplicates
 */
type PropsToOmit = keyof CustomButtonProps | 'className' | 'children';

/**
 * The ButtonProps
 */
export type ButtonProps<T extends React.ElementType = 'button'> = CustomButtonProps &
  Omit<ComponentProps<T>, PropsToOmit>;

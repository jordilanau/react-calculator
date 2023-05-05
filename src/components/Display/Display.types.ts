import { ComponentProps, ElementType } from 'react';

type CustomDisplay = {
  /**
   * The previous operand
   */
  previous: string;

  /**
   * The current operand
   */
  current: string;
};

/**
 * Props to be omitted to remove duplicates
 */
type PropsToOmit = keyof CustomDisplay | 'className' | 'children';

/**
 * The KeyGridProps
 */
export type DisplayProps<T extends ElementType = 'div'> = CustomDisplay & Omit<ComponentProps<T>, PropsToOmit>;

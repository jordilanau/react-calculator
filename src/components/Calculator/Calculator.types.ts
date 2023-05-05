import { ComponentProps, ElementType } from 'react';

type CustomCalculatorProps = Record<string, never>;

/**
 * Props to be omitted to remove duplicates
 */
type PropsToOmit = keyof CustomCalculatorProps | 'className' | 'children';

/**
 * The KeyGridProps
 */
export type CalculatorProps<T extends ElementType = 'div'> = CustomCalculatorProps &
  Omit<ComponentProps<T>, PropsToOmit>;

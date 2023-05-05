import { ComponentProps, ElementType } from 'react';
import { KeyProps } from '../Button/Button.types';

type CustomKeyLayout = {
  /**
   * The keys to be used
   */
  keys: KeyProps[];
};

/**
 * Props to be omitted to remove duplicates
 */
type PropsToOmit = keyof CustomKeyLayout | 'className' | 'children';

/**
 * The KeyGridProps
 */
export type KeyGridProps<T extends ElementType = 'div'> = CustomKeyLayout & Omit<ComponentProps<T>, PropsToOmit>;

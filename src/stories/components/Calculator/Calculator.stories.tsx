import { Meta } from '@storybook/react';
import { Calculator } from '../../../components/Calculator/Calculator';

export default {
  title: 'Calculator',
  component: Calculator,
} satisfies Meta;

export const Sample = () => <Calculator />;

import { Meta, StoryFn } from '@storybook/react';
import { Button } from '../../../components/Button/Button';
import { ButtonProps } from '../../../components/Button/Button.types';

export default {
  title: 'Button',
  component: Button,
} satisfies Meta<ButtonProps>;

export const SingleColumn = () => (
  <div className='grid grid-cols-12'>
    <Button value='1' span='1' type='digit' />
  </div>
);

export const DoubleColumn = () => (
  <div className='grid grid-cols-12'>
    <Button value='AC' span='2' type='operation' />
  </div>
);

const Template: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <div className='grid grid-cols-12'>
    <Button {...args} />
  </div>
);

export const Control = Template.bind({});

Control.args = {
  value: '1',
  span: '1',
  type: 'digit',
};

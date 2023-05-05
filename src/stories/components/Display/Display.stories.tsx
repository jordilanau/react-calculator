import { Meta, StoryFn } from '@storybook/react';
import { Display } from '../../../components/Display/Display';
import { DisplayProps } from '../../../components/Display/Display.types';

export default {
  title: 'Display',
  component: Display,
} satisfies Meta<DisplayProps>;

const Template: StoryFn<DisplayProps> = (args) => (
  <div className='grid grid-cols-12 max-w-xs'>
    <Display {...args} />
  </div>
);

export const Control = Template.bind({});

Control.args = {
  previous: '1234 +',
  current: '4321',
};

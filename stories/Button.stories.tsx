import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from '../src/components/button/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click Me',
  onClick: () => alert('Button clicked!'),
};

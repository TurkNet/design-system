import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from '../components';

export default {
  title: 'Desing System/Button',
  component: Button,
};

const Template: Story<ButtonProps> = args => {
  return <Button {...args} />;
};

export const Standart = Template.bind({});
Standart.args = {
  variant: 'outlined',
};

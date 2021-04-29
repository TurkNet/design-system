import React from 'react';
import { Story } from '@storybook/react';
import { Typography, TypographyProps } from '../components';

export default {
  title: 'Desing System/Typography',
  component: Typography,
};

const Template: Story<TypographyProps> = args => <Typography {...args} />;

export const Standart = Template.bind({});
Standart.args = {
  color: 'primary.normal',
  m: '10px',
  p: 'xl',
  fontWeight: 'bold',
};

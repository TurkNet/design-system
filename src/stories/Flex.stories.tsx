import React from 'react';
import { Story } from '@storybook/react';
import { Flex, FlexProps, Box } from '../components';

export default {
  title: 'Desing System/Flex',
  component: Flex,
};

const Template: Story<FlexProps> = args => (
  <Flex {...args}>
    <Box height="100px" width={1} bg="primary.light" />
    <Box height="100px" width={1} bg="secondary.light" />
  </Flex>
);

export const Standart = Template.bind({});
Standart.args = {
  width: '300px',
  flexDirection: 'column',
};

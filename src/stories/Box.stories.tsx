import React from 'react'
import { Story } from '@storybook/react'
import { Box, BoxProps } from '../components'

export default {
  title: 'Design System/Box',
  component: Box,
}

const Template: Story<BoxProps> = args => <Box {...args} />

export const Standart = Template.bind({})
Standart.args = {
  height: '100px',
  width: '100px',
  bg: 'primary.normal',
  m: 'xs',
  paddingTop: 'xl',
}

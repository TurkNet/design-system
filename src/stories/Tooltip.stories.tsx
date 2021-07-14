import React from 'react'
import { Story } from '@storybook/react'
import { Tooltip, TooltipProps, Box } from '../components'

export default {
  title: 'Design System/Tooltip',
  component: Tooltip,
}

const Template: Story<TooltipProps> = ({ ...args }) => {
  return (
    <Box m={150}>
      <Tooltip {...args}>Tooltip göster</Tooltip>
    </Box>
  )
}

export const Standart = Template.bind({})
Standart.args = {
  title: 'tooltip is shown',
}

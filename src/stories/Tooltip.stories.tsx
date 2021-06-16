import React from 'react'
import { Story } from '@storybook/react'
import { Tooltip, TooltipProps } from '../components'

export default {
  title: 'Design System/Tooltip',
  component: Tooltip,
}

const Template: Story<TooltipProps> = ({ ...args }) => {
  return <Tooltip {...args}>Tooltip göster</Tooltip>
}

export const Standart = Template.bind({})
Standart.args = {
  title: 'tooltip is shown',
}

import React from 'react'
import { Story } from '@storybook/react'
import { Tooltip, TooltipProps } from '../components'

export default {
  title: 'Desing System/Tooltip',
  component: Tooltip,
}

// interface TooltipStoryProps extends TooltipProps {
//   tooltip?: string
// }

const Template: Story<TooltipProps> = ({ ...args }) => {
  return (
    <>
      <Tooltip {...args}>Tooltip göster</Tooltip>
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {
  title: 'tooltip is shown',
}
// to do
// max-width verilecek ama max kaç :)

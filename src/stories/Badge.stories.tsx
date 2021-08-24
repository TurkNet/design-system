import React from 'react'
import { Story } from '@storybook/react'
import { Badge, BadgeProps } from '../components'

export default {
  title: 'Design System/Badge',
  component: Badge,
}

const Template: Story<BadgeProps> = ({ ...args }) => (
  <>
    <Badge {...args} />
  </>
)

export const Standart = Template.bind({})
Standart.args = {
  label: 'Option',
  variant: 'fill',
  color: 'primary',
}

Standart.argTypes = {
  color: {
    control: {
      type: 'radio',
      options: ['primary', 'success', 'info', 'warning', 'danger', 'sky'],
    },
  },
  variant: {
    control: {
      type: 'radio',
      options: ['fill', 'outline'],
    },
  },
}

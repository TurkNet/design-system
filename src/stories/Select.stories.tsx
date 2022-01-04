import React from 'react'
import { Story } from '@storybook/react'
import { Select, ReactSelectProps } from '../components'

export default {
  title: 'Design System/Select',
  component: Select,
}

const Template: Story<ReactSelectProps> = ({ ...args }) => {
  const options = [
    {
      label: `İstanbul`,
      id: `1`,
    },
    {
      label: `Ankara`,
      id: `2`,
    },
    {
      label: `Iğdır`,
      id: `3`,
    },
  ]
  return <Select {...args} options={options} />
}

export const Standart = Template.bind({})
Standart.args = {}

Standart.argTypes = {}

import React from 'react'
import { Story } from '@storybook/react'
import { Select, SelectProps } from '../components'

export default {
  title: 'Design System/Select',
  component: Select,
}

const Template: Story<SelectProps> = ({ ...args }) => {
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
    {
      label: `Üsküdar`,
      id: `4`,
    },
    {
      label: `Şanlıurfa`,
      id: `5`,
    },
    {
      label: `Ömerli`,
      id: `6`,
    },
  ]
  return <Select {...args} options={options} />
}

export const Standart = Template.bind({})
Standart.args = {}

Standart.argTypes = {}

import React from 'react'
import { Story } from '@storybook/react'
import { Select, SelectProps } from '../components'

export default {
  title: 'Desing System/Select',
  component: Select,
}

const options = [
  { value: 'Option 1', id: 1 },
  { value: 'Option 2', id: 2 },
  { value: 'Option 3', id: 3 },
]

const Template: Story<SelectProps> = args => <Select {...args} />

export const Standart = Template.bind({})
Standart.args = {
  defaultValue: 'Select Here',
  options,
  disabled: false,
}

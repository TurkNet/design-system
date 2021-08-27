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

const Template: Story<SelectProps> = ({ variant = 'primary', ...args }) => {
  return (
    <>
      <Select {...args} name="active" variant={variant}>
        Place your text
      </Select>

      <Select {...args} name="active" variant="success">
        Place your text
      </Select>
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {
  defaultValue: 'Select Here',
  options,
}

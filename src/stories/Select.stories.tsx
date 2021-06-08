import React from 'react'
import { Story } from '@storybook/react'
import { Select, SelectProps } from '../components'

export default {
  title: 'Desing System/Select',
  component: Select,
}

const Template: Story<SelectProps> = ({ variant = 'primary', ...args }) => {
  return (
    <>
      <Select {...args} name="active" variant={variant} placeholder="Choose">
        Place your text
      </Select>

      <Select {...args} name="active" variant="success">
        Place your text
      </Select>
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

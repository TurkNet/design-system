import React from 'react'
import { Story } from '@storybook/react'
import { Input, InputProps } from '../components'

export default {
  title: 'Desing System/Input',
  component: Input,
}

const Template: Story<InputProps> = args => <Input {...args} />

export const Standart = Template.bind({})
Standart.args = {
  placeholder: 'placeholder',
  defaultValue: '',
  disabled: false,
}

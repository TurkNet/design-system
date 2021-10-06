import React from 'react'
import { Story } from '@storybook/react'
import { Input, InputProps, Icon } from '../components'

export default {
  title: 'Design System/Input',
  component: Input,
}

const Template: Story<InputProps> = args => {
  return (
    <>
      <Input {...args} icon={<Icon name="search" color="primary.normal" />} />
      <br />
      <br />
      <br />
      <Input {...args} />
    </>
  )
}

export const Standart = Template.bind({})

Standart.args = {
  placeholder: 'placeholder',
  defaultValue: '',
  disabled: false,
}

Standart.argTypes = {
  variant: {
    control: {
      type: 'radio',
      options: ['primary', 'success', 'info', 'warning', 'danger', 'sky'],
    },
  },
}

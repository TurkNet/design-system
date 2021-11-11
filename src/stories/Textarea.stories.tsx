import React from 'react'
import { Story } from '@storybook/react'
import { Textarea, TextareaProps } from '../components'

export default {
  title: 'Design System/Textarea',
  component: Textarea,
}

const Template: Story<TextareaProps> = args => {
  return (
    <>
      <Textarea {...args} />
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

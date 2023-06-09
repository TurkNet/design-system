import React from 'react'
import { Story } from '@storybook/react'
import { Reminder, ReminderProps } from '../components'

export default {
  title: 'Design System/Reminder',
  component: Reminder,
}

const Template: Story<ReminderProps> = args => {
  const { colorTone, severity } = args
  return (
    <Reminder {...args}>
      I am a {colorTone} {severity} Reminder. Also I have lots of variants I am
      a {colorTone} {severity} Reminder. Also I have lots of variants I am a{' '}
      {colorTone} {severity} Reminder. Also I have lots of variants
    </Reminder>
  )
}

export const Standart = Template.bind({})

Standart.args = {
  severity: 'success',
  colorTone: 'light',
}

Standart.argTypes = {
  severity: {
    control: {
      type: 'inline-radio',
      options: ['success', 'warning', 'danger', 'info'],
    },
  },
  colorTone: {
    control: {
      type: 'inline-radio',
      options: ['light', 'normal', 'dark'],
    },
  },
}

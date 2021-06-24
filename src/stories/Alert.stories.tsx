import React from 'react'
import { Story } from '@storybook/react'
import { Alert, AlertProps } from '../components'

export default {
  title: 'Design System/Alert',
  component: Alert,
}

const Template: Story<AlertProps> = args => (
  <Alert {...args}>
    Lorem Ipsum has been the industry`s standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book.
  </Alert>
)

export const Standart = Template.bind({})

Standart.args = {
  severity: 'success',
}

Standart.argTypes = {
  severity: {
    control: {
      type: 'inline-radio',
      options: ['success', 'warning', 'danger', 'info'],
    },
  },
}

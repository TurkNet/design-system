import React from 'react'
import { Story } from '@storybook/react'
import { Button, ButtonProps, Icon } from '../components'

export default {
  title: 'Design System/Button',
  component: Button,
}

const Template: Story<ButtonProps> = ({ icon, ...args }) => (
  <Button {...args} icon={icon && <Icon name={icon as string} size={18} />} />
)

export const Standart = Template.bind({})

Standart.args = {
  value: 'Text',
  color: 'primary',
  size: 'giant',
  variant: 'fill',
  disabled: false,
  fullWidth: false,
  icon: '',
  alignment: 'right',
}

Standart.argTypes = {
  color: {
    control: {
      type: 'inline-radio',
      options: [
        'primary',
        'secondary',
        'success',
        'info',
        'warning',
        'danger',
        'sky',
      ],
    },
  },
  variant: {
    control: {
      type: 'inline-radio',
      options: ['fill', 'outline', 'ghost'],
    },
  },
  size: {
    control: {
      type: 'select',
      options: ['giant', 'large', 'medium', 'small', 'tiny'],
    },
  },
  alignment: {
    control: {
      type: 'select',
      options: ['left', 'right'],
    },
  },
}

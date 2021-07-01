import React from 'react'
import { Story } from '@storybook/react'
import { ButtonGroup, ButtonGroupProps, Button } from '../components'

export default {
  title: 'Design System/ButtonGroup',
  component: ButtonGroup,
}

const Template: Story<ButtonGroupProps> = args => (
  <ButtonGroup {...args}>
    <Button>L</Button>
    <Button>M</Button>
    <Button>R</Button>
  </ButtonGroup>
)

export const Standart = Template.bind({})

Standart.args = {
  color: 'primary',
  size: 'giant',
  variant: 'fill',
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
}

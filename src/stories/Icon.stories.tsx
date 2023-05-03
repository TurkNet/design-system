import React from 'react'
import { Story } from '@storybook/react'
import { Flex, Icon, IconProps } from '../components'

export default {
  title: 'Design System/Icon',
  component: Icon,
}

const Template: Story<IconProps> = args => (
  <Flex justifyContent="space-between">
    <Icon {...args} />
    <a
      href="https://fonts.google.com/icons?selected=Material+Icons"
      target="_blank"
      rel="noreferrer"
    >
      Material Icons
    </a>
  </Flex>
)

export const Standart = Template.bind({})
Standart.args = {
  name: 'home',
}

Standart.argTypes = {
  color: {
    control: {
      type: 'radio',
      options: [
        'primary.normal',
        'success.normal',
        'info.normal',
        'warning.normal',
        'danger.normal',
        'sky.normal',
      ],
    },
  },
  name: {
    control: {
      type: 'select',
      options: [
        'dashboard',
        'edit',
        'loading',
        'favorite_border',
        'home',
        'warning',
      ],
    },
  },
  iconClassType: {
    control: {
      type: 'inline-radio',
      options: ['fill', 'outlined', 'round'],
    },
  },
  cursor: {
    control: {
      type: 'select',
      options: ['pointer', '', 'grabbing'],
    },
  },
}

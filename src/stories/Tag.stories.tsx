import React from 'react'
import { Story } from '@storybook/react'
import { Tag, TagProps, Icon } from '../components'

export default {
  title: 'Design System/Tag',
  component: Tag,
}

const Template: Story<TagProps> = ({ icon, ...args }) => (
  <>
    <Tag {...args} />
    <br />
    <br />
    <Tag {...args} icon={<Icon name={icon as string} size={16} />} />
  </>
)

export const Standart = Template.bind({})
Standart.args = {
  label: 'Option',
  variant: 'fill',
  color: 'primary',
  icon: 'close',
  m: 0,
  mt: 0,
  mb: 0,
  mr: 0,
  ml: 0,
}

Standart.argTypes = {
  color: {
    control: {
      type: 'radio',
      options: ['primary', 'success', 'info', 'warning', 'danger', 'sky'],
    },
  },
  variant: {
    control: {
      type: 'radio',
      options: ['fill', 'outline'],
    },
  },
  icon: {
    control: {
      type: 'select',
      options: ['close', 'edit'],
    },
  },
}

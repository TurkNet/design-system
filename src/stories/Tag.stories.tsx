import React from 'react'
import { Story } from '@storybook/react'
import { Tag, TagProps } from '../components'

export default {
  title: 'Desing System/Tag',
  component: Tag,
}

const Template: Story<TagProps> = args => (
  <>
    <Tag {...args}>Option</Tag>
    <br />
    <br />
    <Tag {...args} label="Option" icon={<span>X</span>} />
  </>
)

export const Standart = Template.bind({})
Standart.args = {
  variant: 'fill',
  color: 'primary',
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
}

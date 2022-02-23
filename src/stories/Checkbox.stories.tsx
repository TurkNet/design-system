import React from 'react'
import { Story } from '@storybook/react'
import { Checkbox, CheckboxProps } from '../components'

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
}

const Template: Story<CheckboxProps> = ({ variant = 'standart', ...args }) => {
  return (
    <>
      <Checkbox {...args} variant={variant}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Checkbox>
      <br />
      <Checkbox {...args} variant={variant} defaultChecked>
        Place your text
      </Checkbox>
      <br />
      <Checkbox {...args} variant={variant} disabled>
        Place your text
      </Checkbox>
      <br />
      <Checkbox {...args} variant={variant} disabled defaultChecked>
        Place your text
      </Checkbox>
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

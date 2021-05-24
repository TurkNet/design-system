import React from 'react'
import { Story } from '@storybook/react'
import { Checkbox, CheckboxProps } from '../components'

export default {
  title: 'Desing System/Checkbox',
  component: Checkbox,
}

const Template: Story<CheckboxProps> = ({ variant = 'standart', ...args }) => {
  return (
    <>
      <Checkbox {...args} variant={variant}>
        Place your text
      </Checkbox>
      <Checkbox {...args} variant={variant} defaultChecked>
        Place your text
      </Checkbox>
      <Checkbox {...args} variant={variant} disabled>
        Place your text
      </Checkbox>
      <Checkbox {...args} variant={variant} disabled defaultChecked>
        Place your text
      </Checkbox>
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

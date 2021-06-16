import React from 'react'
import { Story } from '@storybook/react'
import { Radio, RadioProps } from '../components'

export default {
  title: 'Design System/Radio',
  component: Radio,
}

const Template: Story<RadioProps> = ({ variant = 'standart', ...args }) => {
  return (
    <>
      <Radio {...args} name="active" variant={variant} defaultChecked>
        Place your text
      </Radio>
      <Radio {...args} name="active" variant={variant}>
        Place your text
      </Radio>
      <Radio {...args} variant={variant} disabled>
        Place your text
      </Radio>
      <Radio {...args} variant={variant} disabled defaultChecked>
        Place your text
      </Radio>
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

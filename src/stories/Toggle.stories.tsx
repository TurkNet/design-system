import React from 'react'
import { Story } from '@storybook/react'
import { Toggle, ToggleProps } from '../components'

export default {
  title: 'Desing System/Toggle',
  component: Toggle,
}

const Template: Story<ToggleProps> = ({ variant = 'standart', ...args }) => {
  return (
    <>
      <Toggle {...args} variant={variant}>
        Place your text
      </Toggle>
      <Toggle {...args} variant={variant} defaultChecked>
        Place your text
      </Toggle>
      <Toggle {...args} variant={variant} disabled>
        Place your text
      </Toggle>
      <Toggle {...args} variant={variant} disabled defaultChecked>
        Place your text
      </Toggle>
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {}

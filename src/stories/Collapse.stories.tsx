import React from 'react'
import { Story } from '@storybook/react'
import { Collapse, CollapseProps } from '../components'

export default {
  title: 'Desing System/Collapse',
  component: Collapse,
}

const Template: Story<CollapseProps> = args => (
  <Collapse {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </Collapse>
)

export const Standart = Template.bind({})
Standart.args = {
  opened: true,
  padding: 'xl',
}

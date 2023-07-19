import React from 'react'
import { Story } from '@storybook/react'
import { Clipboard, ClipboardProps } from '../components'

export default {
  title: 'Design System/Clipboard',
  component: Clipboard,
}

const Template: Story<ClipboardProps> = args => {
  return <Clipboard {...args} copiedText="Kopyalandı!" content="236496275" />
}

export const Standart = Template.bind({})

Standart.args = {}

import React from 'react'
import { Story } from '@storybook/react'
import { Popover, PopoverProps, Card, Typography } from '../components'

export default {
  title: 'Design System/Popover',
  component: Popover,
}

const Template: Story<PopoverProps> = ({ content, ...args }) => {
  return (
    <Popover
      {...args}
      content={
        <Card title="Title" subtitle="subTitle" content={content} />
        // <Typography p={6}>{content}</Typography>
      }
    >
      <Typography>Popover</Typography>
    </Popover>
  )
}

export const Standart = Template.bind({})
Standart.args = {
  content: 'Popover is shown',
}

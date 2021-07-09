import React from 'react'
import { Story } from '@storybook/react'
import { Popover, PopoverProps, Box, Card, Typography } from '../components'

export default {
  title: 'Design System/Popover',
  component: Popover,
}

const Template: Story<PopoverProps> = ({ content, title, ...args }) => {
  return (
    <Box m={150}>
      <Popover
        {...args}
        content={
          <Card title={title} subtitle="subtitle" content={content} />
          // <Typography p={6}>{content}</Typography>
        }
      >
        <Typography>Popover</Typography>
      </Popover>
    </Box>
  )
}

export const Standart = Template.bind({})
Standart.args = {
  content: 'Popover is shown',
  title: 'Title',
}

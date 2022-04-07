import React from 'react'
import { Story } from '@storybook/react'
import {
  Popover,
  PopoverProps,
  Box,
  Card,
  Typography,
  Input,
  Icon,
} from '../components'

export default {
  title: 'Design System/Popover',
  component: Popover,
}

const Template: Story<PopoverProps> = ({ content, title, ...args }) => {
  return (
    <Box m={150}>
      <Popover {...args} content={<Box>Selam Selam selam</Box>}>
        <Typography>Popover</Typography>
      </Popover>
      <br />
      <br />
      <br />

      <Box width={300}>
        <Input
          onClickIcon={console.log}
          icon={
            <Popover
              {...args}
              content={
                <Card title={title} subtitle="subtitle" content={content} />
              }
            >
              <Icon name="search" color="currentColor" />
            </Popover>
          }
        />
        <br />
        <br />
        <Input
          onClickIcon={console.log}
          icon={
            <Popover
              {...args}
              content={
                <Card title={title} subtitle="subtitle" content={content} />
              }
            >
              <Icon name="home" color="currentColor" />
            </Popover>
          }
        />
        <br />
        <br />
      </Box>
    </Box>
  )
}

export const Standart = Template.bind({})
Standart.args = {
  content: 'Popover is shown',
  title: 'Title',
}

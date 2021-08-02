import React from 'react'
import { Story } from '@storybook/react'
import {
  CircleLoader,
  LoaderProps,
  LinearLoader,
  Button,
  Flex,
} from '../components'

export default {
  title: 'Design System/Loader',
}

const CircleTemplate: Story<LoaderProps> = args => (
  <Flex alignItems="center">
    <CircleLoader {...args} />
    <Button icon={<CircleLoader size={20} color="currentColor" />}>Text</Button>
  </Flex>
)

export const Circle = CircleTemplate.bind({})
Circle.args = {
  main: false,
  size: 48,
}

const LinearTemplate: Story = args => <LinearLoader {...args} />

export const Linear = LinearTemplate.bind({})
Linear.args = {}

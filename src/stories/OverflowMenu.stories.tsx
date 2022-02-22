import React, { useState } from 'react'
import { Story } from '@storybook/react'
import {
  OverflowMenu,
  OverflowMenuItem,
  Icon,
  Flex,
  Box,
  Typography,
} from '../components'

export default {
  title: 'Design System/Overflow Menu',
}

const Template: Story = args => {
  const [active, setActive] = useState('item1')

  return (
    <Flex justifyContent="center">
      <OverflowMenu {...args}>
        <OverflowMenuItem
          icon={<Icon name="account_circle" size={18} />}
          active={active === 'item1'}
          onClick={() => setActive('item1')}
        >
          <Box>
            <Typography variant="subtitle1" color="grey.700">
              asdasdasdasdasdasdaasdasdasda asdasdasd asdasd
            </Typography>
            <Typography variant="caption2" color="grey.600">
              asdasdasdasdasdasdaasdasdasda asdasdasd asdasd
            </Typography>
          </Box>
        </OverflowMenuItem>
        <OverflowMenuItem
          icon={<Icon name="api" size={18} />}
          active={active === 'item2'}
          onClick={() => setActive('item2')}
        >
          <Box>
            <Typography variant="subtitle1" color="grey.700">
              asdasdasda
            </Typography>
            <Typography variant="caption2" color="grey.600">
              asdasdasdasda
            </Typography>
          </Box>
        </OverflowMenuItem>
        <OverflowMenuItem
          icon={<Icon name="api" size={18} />}
          active={active === 'item3'}
          onClick={() => setActive('item3')}
        >
          <Box>
            <Typography variant="subtitle1" color="grey.700">
              asdasdasd asdasd
            </Typography>
            <Typography variant="caption2" color="grey.600">
              asdasdasdasdasdasdaasdasdasda asdasdasd asdasd
            </Typography>
          </Box>
        </OverflowMenuItem>
      </OverflowMenu>
    </Flex>
  )
}

export const Standart = Template.bind({})

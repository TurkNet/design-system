import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { OverflowMenu, OverflowMenuItem, Icon, Flex } from '../components'

export default {
  title: 'Design System/Overflow Menu',
}

const Template: Story = args => {
  const [active, setActive] = useState('')

  return (
    <Flex justifyContent="space-evenly">
      <OverflowMenu {...args}>
        <OverflowMenuItem
          icon={<Icon name="api" size={18} />}
          active={active === 'item1'}
          onClick={() => setActive('item1')}
        >
          Menu Item 1
        </OverflowMenuItem>
        <OverflowMenuItem
          height={150}
          icon={<Icon name="api" size={18} />}
          active={active === 'item2'}
          onClick={() => setActive('item2')}
        >
          Menu Item 2
        </OverflowMenuItem>
        <OverflowMenuItem
          icon={<Icon name="api" size={18} />}
          active={active === 'item3'}
          onClick={() => setActive('item3')}
        >
          Menu Item 3
        </OverflowMenuItem>
      </OverflowMenu>
      <OverflowMenu {...args}>
        <OverflowMenuItem
          icon={<Icon name="api" size={18} />}
          active={active === 'item1'}
          onClick={() => setActive('item1')}
        />
        <OverflowMenuItem
          icon={<Icon name="api" size={18} />}
          active={active === 'item2'}
          onClick={() => setActive('item2')}
        />
        <OverflowMenuItem
          icon={<Icon name="api" size={18} />}
          active={active === 'item3'}
          onClick={() => setActive('item3')}
        />
      </OverflowMenu>
    </Flex>
  )
}

export const Standart = Template.bind({})

import React, { FC, useState } from 'react'
import { Story } from '@storybook/react'
import {
  Tabs,
  Tab,
  TabPanel,
  TabProps,
  Icon,
  Flex,
  Typography,
  Box,
} from '../components'

export default {
  title: 'Design System/Tabs',
  component: Tabs,
}

const Template: Story = ({ ...args }) => {
  const [currentTabId, setCurrentTabId] = useState(1)

  const MyTab: FC<TabProps> = props => (
    <Tab {...props} currentTabId={currentTabId} onClick={setCurrentTabId} />
  )
  return (
    <>
      <Tabs {...args}>
        <MyTab tabId={1}>
          <Flex alignItems="center">
            <Icon name="add" />
            <Typography> Person</Typography>
          </Flex>
        </MyTab>
        <MyTab tabId={2} label="Tab 2" />
        <MyTab tabId={3} label="Tab 3" />
        <MyTab tabId={4} label="Tab 4" />
      </Tabs>
      <TabPanel tabId={1} currentTabId={currentTabId}>
        Tab Panel 1
      </TabPanel>
      <TabPanel tabId={2} currentTabId={currentTabId}>
        Tab Panel 2
      </TabPanel>
      <TabPanel tabId={3} currentTabId={currentTabId}>
        Tab Panel 3
      </TabPanel>
      <TabPanel tabId={4} currentTabId={currentTabId}>
        Tab Panel 4
      </TabPanel>
      <br />
      <br />
      <br />
      With Box
      <Box width={375}>
        <Tabs {...args}>
          <MyTab tabId={1}>TürkNetli Değilim</MyTab>
          <MyTab tabId={2} label="TürkNet'liyim" />
        </Tabs>
        <TabPanel tabId={1} currentTabId={currentTabId}>
          Tab Panel 1
        </TabPanel>
        <TabPanel tabId={2} currentTabId={currentTabId}>
          Tab Panel 2
        </TabPanel>
      </Box>
    </>
  )
}

export const Standart = Template.bind({})

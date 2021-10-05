import React, { FC } from 'react'
import { Box, BoxProps } from '../Box'

export interface TabPanelProps extends BoxProps {
  tabId: number
  currentTabId?: number
}

export const TabPanel: FC<TabPanelProps> = ({
  children,
  tabId,
  currentTabId,
  ...props
}) => {
  return (
    <Box pt={24} {...props} hidden={currentTabId !== tabId}>
      {children}
    </Box>
  )
}

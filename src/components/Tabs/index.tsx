import React, { FC } from 'react'
import { TabsStyled } from './styled'

export * from './Tab'
export * from './TabPanel'

export interface TabsProps {
  name: string
}
export const Tabs: FC<TabsProps> = ({ children }) => {
  return <TabsStyled>{children}</TabsStyled>
}

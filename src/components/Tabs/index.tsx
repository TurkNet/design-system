import React, { FC } from 'react'
import { TabsProps, TabsStyled } from './styled'

export * from './Tab'
export * from './TabPanel'

export const Tabs: FC<TabsProps> = ({ children, fullWidth }) => {
  return <TabsStyled fullWidth={fullWidth}>{children}</TabsStyled>
}

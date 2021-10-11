import React, { FC } from 'react'
import { TabsStyled } from './styled'

export * from './Tab'
export * from './TabPanel'

export const Tabs: FC = ({ children }) => {
  return <TabsStyled>{children}</TabsStyled>
}

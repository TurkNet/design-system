import React, { FC } from 'react'
import { noop } from '../../utility'
import { TabStyled } from './styled'

export interface TabProps {
  label?: string
  tabId: number
  currentTabId?: number
  onClick?(id: number): void
}

export const Tab: FC<TabProps> = ({
  label,
  children,
  tabId,
  currentTabId,
  onClick = noop,

  ...props
}) => {
  return (
    <TabStyled
      isActive={currentTabId === tabId}
      onClick={() => onClick(tabId)}
      {...props}
    >
      {label || children}
    </TabStyled>
  )
}

import React, { FC } from 'react'
import OverflowMenuItem from './OverflowMenuItem'
import { OverflowMenuStyled } from './styled'

const OverflowMenu: FC = ({ children, ...props }) => {
  return <OverflowMenuStyled {...props}>{children}</OverflowMenuStyled>
}

export { OverflowMenu, OverflowMenuItem }

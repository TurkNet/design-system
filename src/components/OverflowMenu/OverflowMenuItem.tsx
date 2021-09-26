import React, { FC } from 'react'
import { OverflowMenuItemStyled, OverflowLabel } from './styled'

export interface OverflowMenuItemProps {
  icon: React.ReactNode
  onClick?: () => void
  active?: boolean
}

const OverflowMenuItem: FC<OverflowMenuItemProps> = ({
  children,
  icon,
  ...props
}) => {
  return (
    <OverflowMenuItemStyled {...props}>
      {icon}
      {children && <OverflowLabel>{children}</OverflowLabel>}
    </OverflowMenuItemStyled>
  )
}
export default OverflowMenuItem

import React, { FC } from 'react'
import { Icon } from '../Icon'
import { OverflowMenuItemStyled, OverflowLabel } from './styled'

export interface OverflowMenuItemProps {
  icon: React.ReactNode
  onClick?: () => void
  active?: boolean
}

const OverflowMenuItem: FC<OverflowMenuItemProps> = ({
  children,
  icon,
  active,
  ...props
}) => {
  return (
    <OverflowMenuItemStyled {...props}>
      {icon}
      {children && (
        <>
          <OverflowLabel>{children}</OverflowLabel>
          {active && <Icon name="done" color="success.normal" />}
        </>
      )}
    </OverflowMenuItemStyled>
  )
}
export default OverflowMenuItem

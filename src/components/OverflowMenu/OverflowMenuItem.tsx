import React, { FC } from 'react'
import { Icon } from '../Icon'
import {
  OverflowMenuItemStyled,
  OverflowLabel,
  OverflowMenuItemProps,
} from './styled'

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
          {active && <Icon name="done" color="success.normal" size={20} />}
        </>
      )}
    </OverflowMenuItemStyled>
  )
}
export default OverflowMenuItem

import React, { FC } from 'react'
import { TooltipStyled, TooltipStyledProps } from './styled'

export interface TooltipProps extends TooltipStyledProps {
  title: string
}

export const Tooltip: FC<TooltipProps> = ({
  children,
  variant = 'topCenter',
  title,
  ...props
}) => {
  return (
    <TooltipStyled {...props} variant={variant} data-tooltip={title}>
      {children}
    </TooltipStyled>
  )
}

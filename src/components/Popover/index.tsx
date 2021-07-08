import React, { FC, ReactNode } from 'react'
import { PopoverStyled, PopoverStyledProps } from './styled'

export interface PopoverProps extends PopoverStyledProps {
  title?: string
  content?: ReactNode
}

export const Popover: FC<PopoverProps> = ({
  variant = 'right',
  title,
  content,
  children,
  ...props
}) => {
  return (
    <PopoverStyled {...props}>
      {children}
      <div className={`common ${variant}`}>{content}</div>
    </PopoverStyled>
  )
}

import React, { FC, ReactNode } from 'react'
import { PopoverStyled, PopoverStyledProps, Overlay } from './styled'

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
      <Overlay variant={variant}>{content}</Overlay>
    </PopoverStyled>
  )
}

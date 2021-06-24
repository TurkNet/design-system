import React, { FC } from 'react'
import { AlertStyled, AlertStyledProps } from './styled'

export type AlertProps = AlertStyledProps

export const Alert: FC<AlertProps> = ({
  severity = 'info',
  children,
  ...props
}) => (
  <AlertStyled severity={severity} {...props}>
    {children}
  </AlertStyled>
)

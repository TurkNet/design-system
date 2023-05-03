import React, { FC } from 'react'
import { Icon } from '../Icon'
import { ReminderStyled, ReminderStyledProps } from './styled'

export interface ReminderProps extends ReminderStyledProps {
  iconName?: string
  iconSize?: number
}

export const Reminder: FC<ReminderProps> = ({
  severity = 'info',
  colorTone = 'normal',
  iconName = 'warning',
  iconSize = 24,
  children,
  ...props
}) => {
  const iconColor = `${severity}.${colorTone}`
  return (
    <ReminderStyled severity={severity} colorTone={colorTone} {...props}>
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <div>{children}</div>
    </ReminderStyled>
  )
}

import React, { FC } from 'react'
import { ButtonGroupStyled, ButtonGroupStyledProps } from './styled'

export type ButtonGroupProps = ButtonGroupStyledProps

export const ButtonGroup: FC<ButtonGroupProps> = ({
  size = 'large',
  color = 'primary',
  variant = 'fill',
  children,
}) => {
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        size,
        variant,
        color,
        ...child.props,
      })
    }
    return child
  })
  return (
    <ButtonGroupStyled variant={variant} color={color}>
      {childrenWithProps}
    </ButtonGroupStyled>
  )
}

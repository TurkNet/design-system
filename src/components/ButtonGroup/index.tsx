import React, { FC } from 'react'
import { ButtonGroupStyled } from './styled'
import { ButtonProps } from '../Button/index'

export type ButtonGroupProps = ButtonProps

export const ButtonGroup: FC<ButtonGroupProps> = ({
  size = 'large',
  variant = 'fill',
  color = 'primary',
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
  return <ButtonGroupStyled>{childrenWithProps}</ButtonGroupStyled>
}

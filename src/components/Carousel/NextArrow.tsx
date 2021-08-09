import React, { FC } from 'react'
import { Icon } from '../Icon'
import { ArrowStyled } from './styled'

interface NextArrowProps {
  className?: string
  onClick?(): void
}

const NextArrow: FC<NextArrowProps> = ({ className, onClick }) => {
  return (
    <ArrowStyled alignItems="center" className={className} onClick={onClick}>
      <Icon name="arrow_forward_ios" color="sky.dark" />
    </ArrowStyled>
  )
}

export default NextArrow

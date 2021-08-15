import React, { FC } from 'react'
import { Icon } from '../Icon'
import { ArrowStyled } from './styled'

interface PrevArrowProps {
  className?: string
  onClick?(): void
}

const PrevArrow: FC<PrevArrowProps> = ({ className, onClick }) => {
  return (
    <ArrowStyled alignItems="center" className={className} onClick={onClick}>
      <Icon name="arrow_back_ios" color="sky.dark" />
    </ArrowStyled>
  )
}

export default PrevArrow

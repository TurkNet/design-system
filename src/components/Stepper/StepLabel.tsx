import React, { FC } from 'react'
import { noop } from '../../utility'
import { BulletStyled, TextStyled, StepLabelStyled } from './styled'
import { Icon } from '../Icon'

export interface StepLabelProps {
  isPassive?: boolean
  isCompleted?: boolean
  currentStep?: number
  stepIndex?: number
  title?: React.ReactNode
  onClick?: (stepIndex: number) => void
}

export const StepLabel: FC<StepLabelProps> = ({
  title,
  stepIndex = 1,
  currentStep = 1,
  onClick = noop,
  ...props
}) => {
  const isPassive = stepIndex > currentStep
  const isCompleted = stepIndex < currentStep
  return (
    <StepLabelStyled {...props} onClick={() => onClick(stepIndex)}>
      <BulletStyled isPassive={isPassive} isCompleted={isCompleted}>
        {isCompleted ? <Icon name="check" size={12} /> : stepIndex}
      </BulletStyled>
      <TextStyled isPassive={isPassive}>{title}</TextStyled>
    </StepLabelStyled>
  )
}

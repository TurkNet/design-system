import React, { FC } from 'react'
import { StepStyled } from './styled'

export interface StepProps {
  stepIndex?: number
  currentStep?: number
  vertical?: boolean
}

export const Step: FC<StepProps> = ({
  children,
  stepIndex,
  currentStep,
  vertical = false,
  ...props
}) => {
  return (
    <StepStyled {...props} vertical={vertical}>
      {stepIndex === currentStep && children}
    </StepStyled>
  )
}

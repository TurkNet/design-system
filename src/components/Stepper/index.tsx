import React, { FC } from 'react'
import { StepperStyled, LineStyled } from './styled'
import { StepLabel } from './StepLabel'
import { noop } from '../../utility'

export * from './Step'
export * from './StepLabel'

export interface StepperProps {
  onChange?: (stepIndex: number) => void
  labels?: { title: string }[]
  currentStep?: number
  dense?: boolean
}

export const Stepper: FC<StepperProps> = ({
  labels = [],
  currentStep = 1,
  dense,
  onChange = noop,
  children,
  ...props
}) => {
  return (
    <StepperStyled {...props}>
      {labels.map((item, index) => {
        const { title } = item
        const stepIndex = index + 1
        const hideTitle = dense && stepIndex !== currentStep
        return (
          <>
            <StepLabel
              currentStep={currentStep}
              stepIndex={stepIndex}
              title={!hideTitle && title}
              onClick={() => onChange(stepIndex)}
            />
            <LineStyled />
          </>
        )
      })}
    </StepperStyled>
  )
}

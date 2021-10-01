import React, { FC } from 'react'
import {
  StepLabelsStyled,
  StepConnector,
  StepLabelsStyledProps,
} from './styled'
import { Step, StepLabel } from './Step'
import { noop } from '../../utility'

export interface StepLabelsProps extends StepLabelsStyledProps {
  onChange?: (stepIndex: number) => void
  labels?: { title: string }[]
  currentStep?: number
}

const StepLabels: FC<StepLabelsProps> = ({
  labels = [],
  currentStep = 1,
  floatLabel,
  onChange = noop,
  children,
  ...props
}) => {
  return (
    <StepLabelsStyled {...props}>
      {labels.map((item, index) => {
        const { title } = item
        const stepIndex = index + 1
        return (
          <>
            <StepLabel
              currentStep={currentStep}
              stepIndex={stepIndex}
              title={title}
              floatLabel={floatLabel && stepIndex !== currentStep}
              onClick={() => onChange(stepIndex)}
            />
            <StepConnector floatLabel={floatLabel} />
          </>
        )
      })}
    </StepLabelsStyled>
  )
}

export { StepLabels, Step, StepLabel }

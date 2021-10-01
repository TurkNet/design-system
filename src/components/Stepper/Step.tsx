import React, { FC } from 'react'
import { noop } from 'src/utility'
import {
  StepStyled,
  StepStyledProps,
  Bullet,
  TextStyled,
  StepLabelStyled,
  StepLabelStyledProps,
} from './styled'
import { Icon } from '../Icon'

export interface StepProps extends StepStyledProps {
  stepIndex?: number
  currentStep?: number
}

const Step: FC<StepProps> = ({
  children,
  stepIndex,
  currentStep,
  vertical = false,
  ...props
}) => {
  if (stepIndex !== currentStep) {
    return <>{vertical ? <StepStyled vertical={vertical} /> : null}</>
  }

  return (
    <StepStyled {...props} vertical={vertical}>
      {children}
    </StepStyled>
  )
}

interface StepLabelProps extends StepLabelStyledProps {
  currentStep?: number
  stepIndex?: number
  title?: React.ReactNode
  onClick?: (stepIndex: number) => void
}

const StepLabel: FC<StepLabelProps> = ({
  title,
  stepIndex = 1,
  currentStep = 1,
  floatLabel,
  onClick = noop,
  ...props
}) => {
  const passiveStep = stepIndex > currentStep
  const completedStep = stepIndex < currentStep
  return (
    <StepLabelStyled {...props} onClick={() => onClick(stepIndex)}>
      <Bullet passiveStep={passiveStep} completedStep={completedStep}>
        {completedStep ? <Icon name="check" size={12} /> : stepIndex}
      </Bullet>
      <TextStyled passiveStep={passiveStep} floatLabel={floatLabel}>
        {title}
      </TextStyled>
    </StepLabelStyled>
  )
}

export { Step, StepLabel }

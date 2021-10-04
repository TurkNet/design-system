import React, { useState, FC } from 'react'
import { Story } from '@storybook/react'
import {
  Stepper,
  StepLabel,
  StepperProps,
  StepProps,
  StepLabelProps,
  Step,
  Button,
  Flex,
} from '../components'

export default {
  title: 'Design System/Stepper',
}

const labels = [
  { title: 'Step Title 1' },
  { title: 'Step Title 2' },
  { title: 'Step Title 3' },
  { title: 'Step Title 4' },
]

const HorizontalTemplate: Story<StepperProps> = ({ ...args }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleStep = (stepIndex: number) => {
    setCurrentStep(stepIndex)
  }

  const Steps: FC<StepProps> = ({ children, ...props }) => (
    <Step {...props} currentStep={currentStep}>
      {children}
    </Step>
  )

  return (
    <>
      <Stepper
        labels={labels}
        onChange={handleStep}
        currentStep={currentStep}
        {...args}
      />
      <Steps stepIndex={1}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at ...
        <p>
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure ...
        </p>
      </Steps>
      <Steps stepIndex={2}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock ...
        <p>
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure ...
        </p>
      </Steps>
      <Steps stepIndex={3}>
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical Latin literature from 45 BC ...
        <p>
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure ...
        </p>
      </Steps>
      <Steps stepIndex={4}>
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure ...
        <p>
          Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure ...
        </p>
      </Steps>
      <br />
      <br />
      <Flex justifyContent="space-between">
        <Button onClick={() => setCurrentStep(currentStep - 1)}>Prev</Button>
        <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
      </Flex>
    </>
  )
}

const VerticalTemplate: Story<StepperProps> = ({ ...args }) => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleStep = (step: number) => {
    setCurrentStep(step)
  }

  const StepLabels: FC<StepLabelProps> = ({ ...props }) => (
    <StepLabel {...props} currentStep={currentStep} onClick={handleStep} />
  )

  const Steps: FC<StepProps> = ({ children, ...props }) => (
    <Step {...props} currentStep={currentStep} vertical>
      {children}
    </Step>
  )

  return (
    <>
      <StepLabels title="Step Title 1" stepIndex={1} />
      <Steps stepIndex={1}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at ...
      </Steps>
      <StepLabels title="Step Title 2" stepIndex={2} />
      <Steps stepIndex={2}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock ...
      </Steps>
      <StepLabels title="Step Title 3" stepIndex={3} />
      <Steps stepIndex={3}>
        Lorem Ipsum is not simply random text. It has roots in a piece of
        classical Latin literature from 45 BC ...
      </Steps>
      <StepLabels title="Step Title 4" stepIndex={4} />
      <Steps stepIndex={4}>
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure ...
      </Steps>
      <br />
      <br />
      <br />
      <Flex justifyContent="space-between">
        <Button onClick={() => setCurrentStep(currentStep - 1)}>Prev</Button>
        <Button onClick={() => setCurrentStep(currentStep + 1)}>Next</Button>
      </Flex>
    </>
  )
}

export const Horizontal = HorizontalTemplate.bind({})
export const Vertical = VerticalTemplate.bind({})

Horizontal.args = {
  dense: false,
}

import styled, { css } from 'styled-components'
import type { SpaceProps } from 'styled-system'
import { space } from 'styled-system'
import { switchProp, theme } from 'styled-tools'

export interface InputStyledProps extends SpaceProps {
  variant?: keyof typeof variants
}

const variantStyle = (variant: string) => css`
  border-color: ${theme(`colors.${variant}.normal`)};
`

const variants = {
  success: variantStyle('success'),
  info: variantStyle('info'),
  danger: variantStyle('danger'),
  warning: variantStyle('warning'),
  primary: variantStyle('primary'),
}

export const InputStyled = styled.input<InputStyledProps>`
  ${space}
  height: 48px;
  width: 100%;
  border-radius: ${theme('borderRadius.normal')};
  border: 2px solid ${theme('colors.grey.400')};
  background-color: ${theme('colors.grey.100')};
  font-size: ${theme('fontSizes.15')};
  padding: ${theme('space.m')};
  color: ${theme('colors.grey.800')};

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: ${theme('colors.grey.600')};
    opacity: ${theme('opacity.100')};
  }

  :enabled:focus,
  :enabled:active {
    ${switchProp('variant', variants)};
  }

  :disabled {
    opacity: ${theme('opacity.48')};
    background-color: ${theme('colors.grey.200')};
  }
`

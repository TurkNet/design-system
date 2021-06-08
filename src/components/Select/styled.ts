import styled, { css } from 'styled-components'
import type { SpaceProps } from 'styled-system'
import { space } from 'styled-system'
import { switchProp, theme } from 'styled-tools'

export interface SelectStyledProps extends SpaceProps {
  variant?: keyof typeof variants
  options?: keyof typeof Object
  placeholder?: string
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

export const SelectStyled = styled.select<SelectStyledProps>`
  height: 55px;
  width: 100%;
  border-radius: ${theme('borderRadius.normal')};
  border: 2px solid ${theme('colors.grey.400')};
  background-color: ${theme('colors.grey.100')};
  font-size: ${theme('fontSizes.15')};
  padding: ${theme('space.m')};
  color: ${theme('colors.grey.800')};
  margin-bottom: 10px;

  :enabled:focus,
  :enabled:active {
    ${switchProp('variant', variants)};
  }

  :disabled {
    opacity: 0.48;
    background-color: ${theme('colors.grey.200')};
  }
  ${switchProp('variant', variants)}
`

export const OptionStyled = styled.option`
  align-items: center;
  cursor: pointer;
  font-size: ${theme('fontSizes.13')};
`

import styled from 'styled-components'
import type { SpaceProps } from 'styled-system'
import { space, variant } from 'styled-system'
import { theme } from 'styled-tools'

export interface InputStyledProps extends SpaceProps {
  variant?: keyof typeof variants
}

const variantStyle = (variant: string) => ({
  borderColor: `${variant}.light`,
  ':enabled:focus,:enabled:active': {
    borderColor: `${variant}.normal`,
  },
})

const variants = {
  success: variantStyle('success'),
  info: variantStyle('info'),
  danger: variantStyle('danger'),
  warning: variantStyle('warning'),
}

export const InputStyled = styled.input<InputStyledProps>`
  height: 48px;
  width: 100%;
  border-radius: ${theme('borderRadius.normal')};
  border: 2px solid ${theme('colors.grey.400')};
  background-color: ${theme('colors.grey.200')};
  font-size: ${theme('fontSizes.15')};
  padding: ${theme('space.m')};
  color: ${theme('colors.grey.800')};

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: ${theme('colors.grey.600')};
    opacity: 1;
  }

  :enabled:hover {
    background-color: ${theme('colors.grey.300')};
  }

  :enabled:focus,
  :enabled:active {
    border-color: ${theme('colors.primary.normal')};
    background-color: ${theme('colors.grey.100')};
  }

  :disabled {
    opacity: 0.48;
  }

  ${space}
  ${variant({ variants })}
`

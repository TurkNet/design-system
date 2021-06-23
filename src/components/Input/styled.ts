import styled, { css } from 'styled-components'
import type { SpaceProps } from 'styled-system'
import { space as systemSpace } from 'styled-system'
import {
  borderRadius,
  color,
  fontSize,
  opacity,
  space,
  switchProp,
} from '../../utility/styled'

export interface InputStyledProps extends SpaceProps {
  variant?: keyof typeof variants
}

const variantStyle = (variant: string) => css`
  border-color: ${color(`${variant}.normal`)};
`

const variants = {
  success: variantStyle('success'),
  info: variantStyle('info'),
  danger: variantStyle('danger'),
  warning: variantStyle('warning'),
  primary: variantStyle('primary'),
}

export const InputStyled = styled.input<InputStyledProps>`
  ${systemSpace}
  height: 48px;
  width: 100%;
  border-radius: ${borderRadius('normal')};
  border: 2px solid ${color('grey.400')};
  background-color: ${color('grey.100')};
  font-size: ${fontSize('15')};
  padding: ${space('medium')};
  color: ${color('grey.800')};

  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: ${color('grey.600')};
    opacity: ${opacity('100')};
  }

  :enabled:focus,
  :enabled:active {
    ${switchProp('variant', variants)};
  }

  :disabled {
    opacity: ${opacity('48')};
    background-color: ${color('grey.200')};
  }
`

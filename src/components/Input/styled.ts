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
  ifProp,
  fontWeight,
} from '../../utility/styled'

export interface InputStyledProps extends SpaceProps {
  variant?: keyof typeof variants
}

const variantStyle = (variant: string, secondary?: string) => css`
  border: 2px solid ${color(`${secondary || variant}.normal`)};

  :enabled:focus,
  :enabled:active {
    border-color: ${color(`${variant}.dark`)};

    ::placeholder {
      font-weight: ${fontWeight('semi-bold')};
    }
  }
`

const variants = {
  success: variantStyle('success'),
  info: variantStyle('info'),
  danger: variantStyle('danger'),
  warning: variantStyle('warning'),
  primary: variantStyle('primary', 'sky'),
}
export const WrapperStyled = styled.div`
  position: relative;
  background-color: ${color('grey.100')};
  border-radius: ${borderRadius('normal')};
  z-index: 1;
`
export const InputStyled = styled.input<InputStyledProps>`
  ${systemSpace}
  height: 48px;
  width: 100%;
  background-color: transparent;
  font-size: ${fontSize('15')};
  padding: ${space('medium')};
  color: ${color('grey.800')};
  border-radius: ${borderRadius('normal')};
  position: relative;
  z-index: 1;
  ::placeholder,
  :-ms-input-placeholder,
  ::-ms-input-placeholder {
    color: ${color('grey.600')};
    opacity: ${opacity('100')};
  }

  ${switchProp('variant', variants)};

  :disabled {
    opacity: ${opacity('48')};
    background-color: ${color('grey.200')};
  }
`

export const IconStyled = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
  z-index: 2;
  display: flex;
  height: auto;
`

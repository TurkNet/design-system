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

export interface SearchableInputStyledProps extends SpaceProps {
  variant?: keyof typeof variants
  options?: Array<{ value: string; id: number }>
}

const variantStyle = (variant: string, secondary?: string) => css`
  border: 2px solid ${color(`${secondary || variant}.light`)};

  :enabled:focus,
  :enabled:active {
    border-color: ${color(`${variant}.normal`)};
  }
`

const variants = {
  success: variantStyle('success'),
  info: variantStyle('info'),
  danger: variantStyle('danger'),
  warning: variantStyle('warning'),
  primary: variantStyle('primary', 'sky'),
}

export const SearchableInputStyled = styled.input<SearchableInputStyledProps>`
  ${systemSpace}
  height: 48px;
  width: 100%;
  border-radius: ${borderRadius('normal')};
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

  ${switchProp('variant', variants)};

  :disabled {
    opacity: ${opacity('48')};
    background-color: ${color('grey.200')};
  }
`
export const SearchableInputContainerStyled = styled.div`
  width: 100%;
`

export const DropDownListContainerStyled = styled.div`
  z-index: 100;
  width: 100%;
  position: absolute;
`

export const DropDownListStyled = styled.ul`
  padding: 0;
  margin: 4px 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e4e9f2;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 4px;
`

export const ListItemStyled = styled.li`
  list-style: none;
  padding: 0.8em 0 0.8em 20px;
  color: #222b45;
  user-select: none;
  font-size: 15px;
  &:hover {
    color: #fff;
    background: #1a4784;
  }
  cursor: pointer;
  margin-left: -20px;
`

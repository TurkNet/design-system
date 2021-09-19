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
  margin: ${space('xxs')} 0;
  padding-left: ${space('medium')};
  background-color: ${color('grey.100')};
  border: 2px solid ${color('grey.400')};
  box-sizing: border-box;
  font-size: ${fontSize('20')};
  font-weight: 500;
  border-radius: ${borderRadius('normal')};
`

export const ListItemStyled = styled.li`
  list-style: none;
  padding: 12.8px 0 12.8px 20px;
  color: #222b45;
  user-select: none;
  font-size: 15px;
  &:hover {
    color: ${color('grey.100')};
    background: ${color('primary.normal')};
  }
  cursor: pointer;
  margin-left: -20px;
`

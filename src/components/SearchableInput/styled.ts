import styled, { css } from 'styled-components'
import type { SpaceProps } from 'styled-system'
import { borderRadius, color, fontSize, space } from '../../utility/styled'

export interface SearchableInputStyledProps extends SpaceProps {
  variant?: keyof typeof variants
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

export const SearchableInputStyled = styled.div`
  position: relative;
  .material-icons {
    position: absolute;
    right: 16px;
    top: 12px;
  }
`

export const DropDownStyled = styled.ul`
  padding: 0 0 0 ${space('large')};
  width: 100%;
  margin: ${space('xxs')} 0 0 0;
  border-radius: ${borderRadius('normal')};
  border: solid 2px ${color('sky.light')};
  position: absolute;
  left: 0;
  top: 100%;
  overflow: hidden;
  background-color: ${color('grey.100')};
  z-index: 100;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.03), -5px 5px 5px rgba(0, 0, 0, 0.03);
`

export const ListItemStyled = styled.li`
  list-style: none;
  padding: ${space('small')} 0 ${space('small')} 20px;
  color: ${color('grey.800')};
  user-select: none;
  font-size: ${fontSize('15')};
  &:hover {
    color: ${color('grey.100')};
    background: ${color('primary.normal')};
  }
  cursor: pointer;
  margin-left: -${space('large')};
`

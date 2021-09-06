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
} from '../../utility/styled'

export interface SelectStyledProps extends SpaceProps {
  variant?: keyof typeof variants
  defaultValue?: string
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
  primary: variantStyle('primary'),
}

export const SelectStyled = styled.select<SelectStyledProps>`
  ${systemSpace}
  height: 55px;
  width: 100%;
  border-radius: ${borderRadius('normal')};
  background-color: ${color('grey.100')};
  font-size: ${fontSize('15')};
  padding: ${space('medium')};
  color: ${color('grey.800')};

  margin-bottom: 10px;
`

export const OptionStyled = styled.option`
  align-items: center;
  cursor: pointer;
  font-size: ${fontSize('13')};
`

export const DropDownContainer = styled.div`
  width: 343px;
  position: absolute;
  margin-left: 25px;
`
export interface DropDownHeaderProps {
  isOpen: boolean
  variant?: keyof typeof variants
}

export const DropDownHeader = styled.div<DropDownHeaderProps>`
  //   font-weight: 500;
  //   font-size: 1.3rem;
  //color: #3faffa;
  ${systemSpace}

  user-select: none;
  cursor: pointer;
  height: 48px;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  //margin: 23px 34px 5px 31px;
  //   border-radius: 4px;
  //   border: solid 2px #e4e9f2;
  //   padding: 0.5em 0 0.5em 20px;

  border-radius: ${borderRadius('normal')};
  //   background-color: ${color('grey.100')};
  font-size: ${fontSize('15')};
  //   padding: ${space('medium')};
  color: ${color('grey.800')};

  ${switchProp('variant', variants)};

  ${ifProp(
    'isOpen',
    css`
      border: solid 2px #1a4784;
    `
  )}

  :disabled {
    opacity: ${opacity('48')};
    background-color: ${color('grey.200')};
  }
`
// update bellow
export const DropDownHeaderDescription = styled.p`
  height: 24px;
  margin: 0 15px 0 0;
  font-size: 15px;
  // font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #8f9bb3;
`

export const DropDownListContainer = styled.div`
  position: absolute;
  z-index: 100;
  width: 100%;
`

export const DropDownList = styled.ul`
  padding: 0;
  margin: 4px 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e4e9f2;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  /* &:first-child {
        padding-top: 0.8em;
    } */
  border-radius: 4px;
`

export const ListItem = styled.li`
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

export const Arrow = styled.div`
  width: 30px;
  // height: 71%;
  // margin: 0;
  // padding: 0;
  // display: inline-block;
  /* background: #aaaaaa; */
  position: absolute;
  right: 0;
  top: 2px;
`

export const ArrowDown = styled.div`
  border: solid #8f9bb3;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-top: 55%;
`

export const ArrowUp = styled.div`
  border: solid #8f9bb3;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  margin-top: 65%;
`

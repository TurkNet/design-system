import styled, { css } from 'styled-components'
import type { SpaceProps } from 'styled-system'
import { space } from 'styled-system'
import { switchProp, theme } from 'styled-tools'

export interface SelectStyledProps extends SpaceProps {
  variant?: keyof typeof variants
  placeholder?: string
  defaultValue?: string
  selectedItem?: string
  options?: Array<{ value: string; id: number }>
  searchable?: boolean
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
export const Main = styled.div``

export const DropDownContainer = styled.div`
  width: 343px;
  position: absolute;
  margin-left: 25px;
`
// searchable props
// input

export const DropDownHeader = styled.div`
  //margin: 4px 0;
  //padding: 0.4em 2em 0.4em 1em;
  //box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  //color: #3faffa;
  user-select: none;
  cursor: pointer;
  //height: 48px;
  //margin: 23px 34px 5px 31px;
  border-radius: 4px;
  border: solid 2px #e4e9f2;

  padding: 0.5em 0 0.5em 20px;

  &:active {
    border: solid 2px #1a4784;
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
  border: solid #3faffa;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  margin-top: 55%;
`

export const ArrowUp = styled.div`
  border: solid #3faffa;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  margin-top: 65%;
`

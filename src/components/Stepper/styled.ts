import styled, { css } from 'styled-components'
import {
  fontSize,
  fontWeight,
  propColor,
  color,
  ifProp,
} from '../../utility/styled'

export interface StepLabelsStyledProps {
  floatLabel?: boolean
}

export const StepLabelsStyled = styled.ol`
  margin: 0;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  hr:last-child {
    display: none;
  }
`

export interface StepLabelStyledProps {
  passiveStep?: boolean
  floatLabel?: boolean
  completedStep?: boolean
}

export const StepLabelStyled = styled.li`
  display: inline-flex;
  cursor: pointer;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
`

export const Bullet = styled.div<StepLabelStyledProps>`
  width: 24px;
  height: 24px;
  min-width: 24px;
  min-height: 24px;
  border-radius: 100%;
  color: ${color('grey.200')};
  background-color: ${propColor('primary.normal')};
  padding: ${ifProp('completedStep', '5.5px', '4px')};
  font-size: ${fontSize('12')};
  font-weight: ${fontWeight('semi-bold')};
  text-align: center;
  ${ifProp(
    { passiveStep: true },
    css`
      background-color: ${color('grey.400')}};
      color: ${color('grey.600')};
    `
  )};
`

export const TextStyled = styled.div<StepLabelStyledProps>`
  font-size: ${fontSize('13')};
  font-weight: ${fontWeight('semi-bold')};
  line-height: 1.85;
  color: ${color('grey.800')};
  display: ${ifProp('floatLabel', 'none', 'block')};
  ${ifProp(
    { passiveStep: true },
    css`
      font-weight: ${fontWeight('regular')};
      color: ${color('grey.600')};
    `
  )};
  margin-left: 10px;
`
export const StepConnector = styled.hr<StepLabelsStyledProps>`
  width: ${ifProp('floatLabel', '16px', '64px')};
  height: 2px;
  background-color: ${color('grey.300')};
  border-width: 0;
  margin-left: 10px;
  margin-right: 10px;
`

export interface StepStyledProps {
  vertical?: boolean
}

export const StepStyled = styled.div<StepStyledProps>`
  ${ifProp(
    { vertical: true },
    css`
      border-left: 2px solid ${color('grey.300')};
      margin: 0 11px;
      padding-left: 21px;
      min-height: 32px;
    `
  )};
  :last-of-type {
    border-left: none;
  }
`

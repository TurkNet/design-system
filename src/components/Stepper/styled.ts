import styled, { css } from 'styled-components'
import {
  fontSize,
  fontWeight,
  propColor,
  color,
  ifProp,
} from '../../utility/styled'

interface StyledProps {
  vertical?: boolean
  isPassive?: boolean
  isCompleted?: boolean
}

export const StepperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  hr:last-child {
    display: none;
  }
`

export const StepStyled = styled.section<StyledProps>`
  ${ifProp(
    { vertical: true },
    css`
      border-left: 2px solid ${color('grey.300')};
      margin: 0 12px;
      padding-left: 20px;
      min-height: 32px;
    `
  )}

  :last-of-type {
    border-color: transparent;
  }
`

export const StepLabelStyled = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin: 12px 0;
`

export const BulletStyled = styled.div<StyledProps>`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${fontSize('12')};
  font-weight: ${fontWeight('semi-bold')};
  background-color: ${propColor('primary.normal')};
  color: ${color('grey.200')};
  ${ifProp(
    { isPassive: true },
    css`
      background-color: ${color('grey.400')}};
      color: ${color('grey.600')};
    `
  )}
`

export const TextStyled = styled.div<StyledProps>`
  margin-left: 10px;
  font-size: ${fontSize('13')};
  font-weight: ${fontWeight('semi-bold')};
  ${ifProp(
    { isPassive: true },
    css`
      font-weight: ${fontWeight('regular')};
      color: ${color('grey.600')};
    `
  )}

  :empty {
    display: none;
  }
`

export const LineStyled = styled.hr<StyledProps>`
  flex: 1;
  height: 2px;
  background-color: ${color('grey.300')};
  border-width: 0;
  margin-left: 10px;
  margin-right: 10px;
`

import styled, { css } from 'styled-components'
import { color, fontSize, fontWeight, propColor, ifProp } from '../../utility'

export const OverflowMenuStyled = styled.ol`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  li:last-child {
    border-bottom: none;
  }
`
export const OverflowMenuItemStyled = styled.li`
  display: inline-flex;
  align-items: center;
  padding: 16px 18px;
  height: 48px;
  border-bottom: 1px solid ${color('grey.300')};
  cursor: pointer;
  user-select: none;
  color: ${color('grey.800')};
  ${ifProp(
    'active',
    css`
      * {
        color: currentColor;
      }
    `
  )};
`

export const OverflowLabel = styled.span`
  min-width: 132px;
  margin-left: 14px;
  font-size: ${fontSize('13')};
  font-weight: ${fontWeight('semi-bold')};
`

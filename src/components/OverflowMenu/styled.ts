import styled, { css } from 'styled-components'
import { layout, LayoutProps } from 'styled-system'
import { color, fontSize, fontWeight, ifProp } from '../../utility'

export interface OverflowMenuItemProps extends LayoutProps {
  icon: React.ReactNode
  onClick?: () => void
  active?: boolean
}

export const OverflowMenuStyled = styled.ol`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  li:last-child {
    border-bottom: none;
  }
`
export const OverflowMenuItemStyled = styled.li<LayoutProps>`
  display: inline-flex;
  align-items: center;
  padding: 16px 18px;
  height: auto;
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
  ${layout}
`

export const OverflowLabel = styled.span`
  min-width: 132px;
  margin-left: 14px;
  font-size: ${fontSize('13')};
  font-weight: ${fontWeight('semi-bold')};
`

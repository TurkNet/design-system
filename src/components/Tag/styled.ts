import styled, { css } from 'styled-components'
import { theme, switchProp, withProp } from 'styled-tools'
import Color from 'color'

export interface TagStyledProps {
  variant?: keyof typeof variants
  color?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'sky'
}

const themeColor = ({ color, theme }: any) => theme.colors[color].normal
const alphaColor = (color: any): any => Color(color).alpha(0.08)

const variants = {
  fill: css`
    background-color: ${themeColor};
    border-color: ${themeColor};
  `,
  outline: css`
    background-color: ${withProp(themeColor, alphaColor)};
    border-color: ${themeColor};
    color: ${themeColor};
  `,
}

export const TagStyled = styled.div<TagStyledProps>`
  position: relative;
  color: ${theme('colors.grey.100')};
  height: 24px;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 600;
  border: 2px solid;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;

  ${switchProp('variant', variants)}

  * {
    color: currentColor;
  }

  > :last-child {
    margin-left: 9px;
    margin-right: -6px;
  }

  > :first-child {
    margin: 0;
  }
`

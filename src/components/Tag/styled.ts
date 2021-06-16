import styled, { css } from 'styled-components'
import { theme, switchProp, withProp } from 'styled-tools'
import { themeColor, alphaColor } from '../../utility/styled'

export interface TagStyledProps {
  variant?: keyof typeof variants
  color?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'sky'
}

const variants = {
  fill: css`
    background-color: ${themeColor('normal')};
    border-color: ${themeColor('normal')};
  `,
  outline: css`
    background-color: ${withProp(themeColor('normal'), alphaColor(0.08))};
    border-color: ${themeColor('normal')};
    color: ${themeColor('normal')};
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
    margin-left: 6px;
    margin-right: -12px;
  }

  > :first-child {
    margin: 0;
  }
`

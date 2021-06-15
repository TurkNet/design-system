import styled, { css } from 'styled-components'
import { variant } from 'styled-system'
import { switchProp, theme, withProp, ifProp } from 'styled-tools'
import { themeColor, alphaColor } from '../../utility/styled'

const sizeVariants = {
  giant: {
    height: '56px',
    fontSize: '18',
  },
  large: {
    height: '48px',
    fontSize: '16',
  },
  medium: {
    height: '40px',
    fontSize: '14',
  },
  small: {
    height: '32px',
    fontSize: '12',
  },
  tiny: {
    height: '24px',
    fontSize: '10',
  },
}

const variants = {
  fill: css`
    background-color: ${themeColor('normal')};
    border: none;
    color: ${theme('colors.grey.100')};
    &:hover {
      background-color: ${themeColor('light')};
    }
    &:active,
    &:focus {
      background-color: ${themeColor('dark')};
    }
    &:disabled {
      background-color: ${theme('colors.grey.600')};
    }
  `,
  outline: css`
    background-color: ${theme('colors.grey.100')};
    border: solid 2px ${themeColor('normal')};
    color: ${themeColor('normal')};
    &:hover {
      background-color: ${withProp(themeColor('normal'), alphaColor(0.16))};
    }
    &:active,
    &:focus {
      background-color: ${withProp(themeColor('normal'), alphaColor(0.24))};
    }
    &:disabled {
      background-color: ${withProp('theme.colors.grey.600', alphaColor(0.01))};
      border-color: ${withProp('theme.colors.grey.600', alphaColor(0.24))};
    }
  `,
  ghost: css`
    background-color: ${theme('colors.grey.100')};
    border: none;
    color: ${themeColor('normal')};
    &:hover {
      background-color: ${withProp('theme.colors.grey.600', alphaColor(0.08))};
    }
    &:active {
      background-color: ${withProp('theme.colors.grey.600', alphaColor(0.16))};
    }
    &:focus {
      background-color: ${withProp(themeColor('normal'), alphaColor(0.16))};
      border: solid 2px ${withProp('theme.colors.grey.600', alphaColor(0.4))};
    }
    &:disabled {
      background-color: ${withProp('theme.colors.grey.600', alphaColor(0.16))};
    }
  `,
}

export interface ButtonStyledProps {
  color?: string
  size?: keyof typeof sizeVariants
  variant?: keyof typeof variants
  fullWidth?: boolean
  disabled?: boolean
  iconPosition?: string
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  * {
    color: currentColor;
  }
  border-radius: ${theme('borderRadius.normal')};
  font-weight: ${theme('fontWeights.semi-bold')};
  width: ${ifProp({ fullWidth: true }, '100%')};
  ${switchProp('variant', variants)};
  ${variant({
    prop: 'size',
    scale: 'theme.fontSizes',
    variants: sizeVariants,
  })};
  ${switchProp('iconPosition', {
    right: css`
      > :first-child {
        margin-right: 25px;
      }
    `,
    left: css`
      flex-direction: row-reverse;
      > :last-child {
        margin-right: 12px;
      }
    `,
  })};
  span:empty {
    display: none;
  }
  span:only-child {
    margin: 0;
  }
`

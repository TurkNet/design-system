import styled, { css } from 'styled-components'
import { variant, space, SpaceProps } from 'styled-system'
import {
  prop,
  propColor,
  color,
  borderRadius,
  fontWeight,
  switchProp,
  ifProp,
} from '../../utility/styled'

const sizes = {
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
    background-color: ${propColor('normal')};
    border: none;
    color: ${color('grey.100')};
    &:hover {
      background-color: ${propColor('light')};
    }
    &:active,
    &:focus {
      background-color: ${propColor('dark')};
    }
    &:disabled {
      background-color: ${color('grey.600', 0.24)};
      color: ${color('grey.600', 0.48)};
      cursor: not-allowed;
    }
  `,
  outline: css`
    background-color: ${color('grey.100')};
    border: solid 2px ${propColor('normal')};
    color: ${propColor('normal')};
    &:hover {
      background-color: ${propColor('normal', 0.16)};
    }
    &:active,
    &:focus {
      background-color: ${propColor('normal', 0.24)};
    }
    &:disabled {
      background-color: ${color('grey.600', 0.01)};
      border-color: ${color('grey.600', 0.24)};
      color: ${color('grey.600', 0.48)};
      cursor: not-allowed;
    }
  `,
  ghost: css`
    background-color: ${color('grey.100')};
    border: 2px solid transparent;
    color: ${propColor('normal')};
    &:hover {
      background-color: ${propColor('light', 0.08)};
    }
    &:active {
      background-color: ${propColor('light', 0.16)};
    }
    &:focus {
      background-color: ${propColor('normal', 0.16)};
      border-color: ${propColor('light', 0.16)};
    }
    &:disabled {
      background-color: ${color('grey.600', 0.16)};
      color: ${color('grey.600', 0.48)};
      cursor: not-allowed;
    }
  `,
}

const positions = {
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
}

export interface ButtonStyledProps extends SpaceProps {
  color?: string
  size?: keyof typeof sizes
  variant?: keyof typeof variants
  fullWidth?: boolean
  disabled?: boolean
  alignment?: keyof typeof positions
  width?: number
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  user-select: none;
  cursor: pointer;
  * {
    color: currentColor;
  }
  span:empty {
    display: none;
  }
  span:only-child {
    margin: 0;
  }
  border-radius: ${borderRadius('normal')};
  font-weight: ${fontWeight('semi-bold')};
  ${ifProp(
    { fullWidth: true },
    css`
      width: 100%;
    `,
    css`
      width: ${prop('width')}px;
    `
  )}

  ${variant({ prop: 'size', variants: sizes })};
  ${switchProp('variant', variants)};
  ${switchProp('alignment', positions)};
  ${space}
`

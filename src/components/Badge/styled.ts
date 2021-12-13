import styled, { css } from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import {
  propColor,
  color,
  switchProp,
  fontWeight,
  fontSize,
} from '../../utility/styled'

export interface BadgeStyledProps extends SpaceProps {
  variant?: keyof typeof variants
  color?: 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'sky'
}

const variants = {
  fill: css`
    background-color: ${propColor('normal')};
    border-color: ${propColor('normal')};
  `,
  outline: css`
    background-color: ${propColor('normal', 0.08)};
    border-color: ${propColor('normal')};
    color: ${propColor('normal')};
  `,
}

export const BadgeStyled = styled.div<BadgeStyledProps>`
  position: relative;
  color: ${color('grey.100')};
  height: 24px;
  padding: 0 16px;
  font-size: ${fontSize('12')};
  font-weight: ${fontWeight('semi-bold')};
  border: 2px solid;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  ${space}
  ${switchProp('variant', variants)}
`

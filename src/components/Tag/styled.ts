import styled, { css } from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { propColor, color, switchProp } from '../../utility/styled'

export interface TagStyledProps extends SpaceProps {
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

export const TagStyled = styled.div<TagStyledProps>`
  position: relative;
  color: ${color('grey.100')};
  height: 24px;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 600;
  border: 2px solid;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  ${space}
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

import styled, { css } from 'styled-components'
import { borderRadius, propColor, switchProp } from '../../utility/styled'
import { ButtonProps } from '../Button/index'

export type ButtonGroupStyledProps = ButtonProps

export const ButtonGroupStyled = styled.div<ButtonGroupStyledProps>`
  button:nth-child(n + 1) {
    border-radius: 0;
    ${switchProp('variant', {
      fill: css`
        :not(:first-child) {
          border-left: 1px solid ${propColor('dark')};
        }
      `,
      outline: css`
        :not(:first-child) {
          border-left: 0;
        }
      `,
      ghost: css`
        :not(:first-child) {
          border-left: 1px solid ${propColor('light', 0.8)};
        }
        :not(:last-child) {
          border-right: 0;
        }
      `,
    })}
  }

  button:first-child {
    border-radius: ${borderRadius('normal', '0', '0', 'normal')};
  }
  button:last-child {
    border-radius: ${borderRadius('0', 'normal', 'normal', '0')};
  }
`

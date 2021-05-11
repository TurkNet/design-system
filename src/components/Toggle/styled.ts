import styled from 'styled-components'
import { theme, switchProp } from 'styled-tools'
import { variants } from '../Checkbox/styled'

export interface ToggleStyledProps {
  variant?: keyof typeof variants
}

export const ToggleStyled = styled.input<ToggleStyledProps>`
  position: relative;
  user-select: none;
  cursor: pointer;
  margin-right: ${theme('space.xs')};
  width: 52px;
  height: 30px;
  border-radius: 100&;

  :after,
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 0.3s;
  }

  :after {
    height: 32px;
    width: 52px;
    border-radius: 100px;
    border: 2px solid;
  }

  :before {
    width: 28px;
    height: 28px;
    background-color: ${theme('colors.grey.100')};
    border-radius: 100%;
    z-index: 1;
    left: calc(25% + 3px);
  }

  :checked:before {
    left: calc(75% - 3px);
  }

  :disabled {
    opacity: 0.48;
    cursor: default;
  }

  ${switchProp('variant', variants)}
`

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  font-size: ${theme('fontSizes.13')};
`

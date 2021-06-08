import styled, { css } from 'styled-components'
import { theme, switchProp } from 'styled-tools'

const variantStyle = (color1: string, color2?: string) => {
  return css`
    :enabled {
      :after {
        background-color: ${theme(`colors.${color2 || color1}.light`)};
        border-color: ${theme(`colors.${color2 || color1}.normal`)};
      }

      :hover:after {
        border-color: ${theme(`colors.${color1}.dark`)};
      }

      :focus:after,
      :active:after {
        background-color: ${theme(`colors.${color2 || color1}.light`)};
        border-color: ${theme(`colors.${color2 || color1}.dark`)};
      }
    }

    :enabled:checked {
      :after {
        background-color: ${theme(`colors.${color1}.normal`)};
        border-color: transparent;
      }

      :hover:after {
        background-color: ${theme(`colors.${color1}.light`)};
        border-color: transparent;
      }

      :focus:after,
      :active:after {
        background-color: ${theme(`colors.${color1}.normal`)};
        border-color: ${theme(`colors.${color1}.dark`)};
      }
    }

    :disabled {
      :after {
        background-color: ${theme(`colors.${color2 || color1}.light`)};
        border-color: ${theme(`colors.${color1}.dark`)};
      }

      :before,
      :checked:before {
        background-color: ${theme(`colors.${color2 || color1}.normal`)};
      }
    }
  `
}

export const variants = {
  success: variantStyle('success'),
  danger: variantStyle('danger'),
  info: variantStyle('info'),
  warning: variantStyle('warning'),
  primary: variantStyle('primary'),
  standart: variantStyle('primary', 'sky'),
}

export interface ToggleStyledProps {
  variant?: keyof typeof variants
}

export const ToggleStyled = styled.input<ToggleStyledProps>`
  position: relative;
  user-select: none;
  cursor: pointer;
  margin: 2px 6px 2px 0;
  width: 52px;
  height: 30px;
  border-radius: 50%;

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
    opacity: ${theme('opacity.normal')};
    cursor: default;
  }

  ${switchProp('variant', variants)}
`

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${theme('fontSizes.13')};
`

import styled, { css } from 'styled-components'
import { theme, switchProp } from 'styled-tools'

const variantStyle = (color1: string, color2?: string) => {
  return css`
    :enabled {
      :after {
        background-color: ${theme(`colors.grey.100`)};
        border-color: ${theme(`colors.${color2 || color1}.normal`)};
      }

      :hover:after {
        border-color: ${theme(`colors.${color1}.dark`)};
        background-color: ${theme(`colors.${color2 || color1}.light`)};
      }

      :focus:after,
      :active:after {
        background-color: ${theme(`colors.${color2 || color1}.light`)};
        border-color: ${theme(`colors.${color2 || color1}.dark`)};
      }
    }

    :enabled:checked {
      :after {
        background-color: ${theme(`colors.grey.100`)};
        border-color: ${theme(`colors.${color1}.normal`)};
      }

      :before {
        background-color: ${theme(`colors.${color1}.normal`)};
      }

      :hover:after {
        border-color: ${theme(`colors.${color1}.light`)};
      }

      :hover:before {
        background-color: ${theme(`colors.${color1}.light`)};
      }

      :focus:after,
      :active:after {
        border-color: ${theme(`colors.${color1}.dark`)};
      }

      :focus:before,
      :active:before {
        background-color: ${theme(`colors.${color1}.dark`)};
      }
    }

    :disabled {
      :after {
        background-color: ${theme(`colors.${color2 || color1}.light`)};
        border-color: ${theme(`colors.${color2 || color1}.dark`)};
      }

      :checked:after {
        background-color: ${theme(`colors.grey.100`)};
      }

      :checked:before {
        background-color: ${theme(`colors.${color2 || color1}.dark`)};
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

export interface RadioStyledProps {
  variant?: keyof typeof variants
}

export const RadioStyled = styled.input<RadioStyledProps>`
  position: relative;
  user-select: none;
  height: 16px;
  width: 18px;
  margin: 2px 4px 2px 0;

  :after,
  :before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  :after {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    border: 2px solid;
  }

  :checked:before {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    z-index: 1;
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
  cursor: pointer;
  font-size: ${theme('fontSizes.13')};
`

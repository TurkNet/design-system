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
        background-color: ${theme(`colors.${color1}.light`)};
        border-color: ${theme(`colors.${color1}.dark`)};
      }

      :checked:after {
        background-color: ${theme(`colors.${color1}.dark`)};
        border-color: transparent;
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

export interface CheckboxStyledProps {
  variant?: keyof typeof variants
}

export const CheckboxStyled = styled.input<CheckboxStyledProps>`
  position: relative;
  user-select: none;
  cursor: pointer;
  margin-right: ${theme('space.xs')};

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
    border-radius: ${theme('borderRadius.small')};
    border: 2px solid;
    transition: 0.3s;
  }

  :checked:before {
    width: 5px;
    height: 8px;
    border: solid white;
    border-width: 0 2px 2px 0;
    margin-top: -1px;
    z-index: 1;
    transform: translate(-50%, -50%) rotate(45deg);
    border-radius: 1px;
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

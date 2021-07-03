import styled, { css } from 'styled-components'
import { color, fontSize, opacity, switchProp } from '../../utility/styled'

const variantStyle = (color1: string, color2?: string) => {
  const mainColor = color2 || color1
  return css`
    :enabled {
      :after {
        background-color: ${color(`grey.100`)};
        border-color: ${color(`${mainColor}.normal`)};
      }

      :hover:after {
        border-color: ${color(`${color1}.dark`)};
        background-color: ${color(`${mainColor}.light`)};
      }

      :focus:after,
      :active:after {
        background-color: ${color(`${mainColor}.light`)};
        border-color: ${color(`${mainColor}.dark`)};
      }
    }

    :enabled:checked {
      :after {
        background-color: ${color(`grey.100`)};
        border-color: ${color(`${color1}.normal`)};
      }

      :before {
        background-color: ${color(`${color1}.normal`)};
      }

      :hover:after {
        border-color: ${color(`${color1}.light`)};
      }

      :hover:before {
        background-color: ${color(`${color1}.light`)};
      }

      :focus:after,
      :active:after {
        border-color: ${color(`${color1}.dark`)};
      }

      :focus:before,
      :active:before {
        background-color: ${color(`${color1}.dark`)};
      }
    }

    :disabled {
      :after {
        background-color: ${color(`${mainColor}.light`)};
        border-color: ${color(`${mainColor}.dark`)};
      }

      :checked:after {
        background-color: ${color(`grey.100`)};
      }

      :checked:before {
        background-color: ${color(`${mainColor}.dark`)};
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
  margin: 2px 6px 2px 0;

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
    opacity: ${opacity('48')};
    cursor: default;
  }

  ${switchProp('variant', variants)}
`

export const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${fontSize('13')};
`

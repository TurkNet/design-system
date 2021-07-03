import styled, { css } from 'styled-components'
import { color, fontSize, opacity, switchProp } from '../../utility/styled'

const variantStyle = (color1: string, color2?: string) => {
  const mainColor = color2 || color1
  return css`
    :enabled {
      :after {
        background-color: ${color(`${mainColor}.light`)};
        border-color: ${color(`${mainColor}.normal`)};
      }

      :hover:after {
        border-color: ${color(`${color1}.dark`)};
      }

      :focus:after,
      :active:after {
        background-color: ${color(`${mainColor}.light`)};
        border-color: ${color(`${mainColor}.dark`)};
      }
    }

    :enabled:checked {
      :after {
        background-color: ${color(`${color1}.normal`)};
        border-color: transparent;
      }

      :hover:after {
        background-color: ${color(`${color1}.light`)};
        border-color: transparent;
      }

      :focus:after,
      :active:after {
        background-color: ${color(`${color1}.normal`)};
        border-color: ${color(`${color1}.dark`)};
      }
    }

    :disabled {
      :after {
        background-color: ${color(`${mainColor}.light`)};
        border-color: ${color(`${color1}.dark`)};
      }

      :before,
      :checked:before {
        background-color: ${color(`${mainColor}.normal`)};
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
    background-color: ${color('grey.100')};
    border-radius: 100%;
    z-index: 1;
    left: calc(25% + 3px);
  }

  :checked:before {
    left: calc(75% - 3px);
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

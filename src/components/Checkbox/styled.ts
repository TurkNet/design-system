import styled, { css } from 'styled-components'
import {
  borderRadius,
  switchProp,
  color,
  fontSize,
  opacity,
} from '../../utility/styled'

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
        border-color: ${color(`${mainColor}.dark`)};
      }

      :checked:after {
        background-color: ${color(`${mainColor}.dark`)};
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
  height: 16px;
  width: 18px;
  margin: 2px 6px 2px 0;
  flex-shrink: 0;

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
    border-radius: ${borderRadius('small')};
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
  width: fit-content;
  span {
    line-height: 18px;
  }
`

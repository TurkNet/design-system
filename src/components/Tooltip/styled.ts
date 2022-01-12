import styled, { css } from 'styled-components'
import { borderRadius, color, fontSize, switchProp } from '../../utility/styled'

export const variants = {
  topCenter: css`
    :before {
      bottom: 100%;
      transform: translate(-50%, -3px) rotate(180deg);
      border-width: 0 7px 7px 7px;
    }
    :after {
      bottom: calc(100% + 5px);
      transform: translate(-50%, -4px);
    }
    :before,
    :after {
      left: 50%;
    }
  `,
  topLeft: css`
    :before {
      bottom: 100%;
      transform: translate(16px, -3px) rotate(180deg);
      border-width: 0 7px 7px 7px;
    }
    :after {
      bottom: calc(100% + 5px);
      transform: translate(0px, -4px);
    }
    :before,
    :after {
      left: 0px;
    }
  `,
  topRight: css`
    :before {
      bottom: 100%;
      transform: translate(-16px, -3px) rotate(180deg);
      border-width: 0 7px 7px 7px;
    }
    :after {
      bottom: calc(100% + 5px);
      transform: translate(0px, -4px);
    }
    :before,
    :after {
      right: 0px;
    }
  `,
  right: css`
    :before {
      right: calc(0em - 12px);
      transform: translate(8px, -50%) rotate(45deg);
      border-width: 0 10px 10px 0px;
    }
    :after {
      left: calc(100% + 5px);
      transform: translate(8px, -50%);
    }
    :before,
    :after {
      top: 50%;
    }
  `,
  bottomCenter: css`
    :before {
      top: 89%;
      transform: translate(-50%, 8px);
      border-width: 0 7px 7px 7px;
    }
    :after {
      top: calc(100% + 5px);
      transform: translate(-50%, 7px);
    }
    :before,
    :after {
      left: 50%;
    }
  `,
  bottomLeft: css`
    :before {
      top: 89%;
      transform: translate(16px, 8px);
      border-width: 0 7px 7px 7px;
    }
    :after {
      top: calc(100% + 5px);
      transform: translate(0px, 7px);
    }
    :before,
    :after {
      left: 0px;
    }
  `,
  bottomRight: css`
    :before {
      top: 89%;
      transform: translate(-16px, 8px);
      border-width: 0 7px 7px 7px;
    }
    :after {
      top: calc(100% + 5px);
      transform: translate(0px, 7px);
    }
    :before,
    :after {
      right: 0px;
    }
  `,
  left: css`
    :before {
      left: calc(0em - 28px);
      transform: translate(8px, -50%) rotate(225deg);
      border-width: 0 10px 10px 0px;
    }
    :after {
      right: calc(100% + 5px);
      transform: translate(-8px, -50%);
    }
    :before,
    :after {
      top: 50%;
    }
  `,
}

export interface TooltipStyledProps {
  variant?: keyof typeof variants
}

export const TooltipStyled = styled.span<TooltipStyledProps>`
  position: relative;
  cursor: pointer;

  :before,
  :after {
    line-height: 16px;
    font-size: ${fontSize('12')};
    pointer-events: none;
    position: absolute;
    box-sizing: border-box;
    display: none;
  }
  :before {
    content: '';
    border: solid transparent;
    z-index: 2;
    border-bottom-color: ${color(`grey.1100`)};
  }
  :after {
    content: attr(data-tooltip);
    text-align: center;
    min-width: 121px;
    max-width: 500px;
    min-height: 28px;
    padding: 6px 6px;
    border-radius: ${borderRadius('normal')};
    background: ${color(`grey.1100`)};
    color: ${color(`grey.100`)};
    z-index: 99;
  }

  :hover:before,
  :hover:after {
    display: block;
  }

  ${switchProp('variant', variants)}
`

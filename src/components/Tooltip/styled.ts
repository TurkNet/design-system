import styled, { css } from 'styled-components'
import { switchProp } from 'styled-tools'

export const variants = {
  topCenter: css`
    :before {
      bottom: 100%;
      border-bottom-width: 0;
      border-top-color: #c7bdbd; // buralarda theme den alınacak.
    }
    :after {
      bottom: calc(100% + 5px);
    }
    :before,
    :after {
      left: 50%;
      transform: translate(-50%, -4px);
    }
  `,
  topLeft: css`
    :before {
      bottom: 100%;
      border-bottom-width: 0;
      border-top-color: #c7bdbd; // buralarda theme den alınacak.
    }
    :after {
      bottom: calc(100% + 5px);
    }
    :before,
    :after {
      left: 50%;
      transform: translate(-50%, -4px);
    }
  `,
  topRight: css`
    :before {
      bottom: 100%;
      border-bottom-width: 0;
      border-top-color: #c7bdbd; // buralarda theme den alınacak.
    }
    :after {
      bottom: calc(100% + 5px);
    }
    :before,
    :after {
      left: 50%;
      transform: translate(-50%, -4px);
    }
  `,
  right: css`
    :before {
      top: 50%;
      border-left-width: 0;
      border-right-color: red;
      right: calc(0em - 5px);

      transform: translate(8px, -50%);
    }
    :after {
      top: 50%;
      left: calc(100% + 5px);

      transform: translate(8px, -50%);
    }
  `,
  bottomCenter: css`
    :before {
      top: 100%;
      border-top-width: 0;
      border-bottom-color: #c7bdbd;
    }
    :after {
      top: calc(100% + 5px);
    }
    :before,
    :after {
      left: 50%;
      transform: translate(-50%, 8px);
    }
  `,
  bottomLeft: css`
    :before {
      bottom: 100%;
      border-bottom-width: 0;
      border-top-color: #c7bdbd; // buralarda theme den alınacak.
    }
    :after {
      bottom: calc(100% + 5px);
    }
    :before,
    :after {
      left: 50%;
      transform: translate(-50%, -4px);
    }
  `,
  bottomRight: css`
    :before {
      bottom: 100%;
      border-bottom-width: 0;
      border-top-color: #c7bdbd; // buralarda theme den alınacak.
    }
    :after {
      bottom: calc(100% + 5px);
    }
    :before,
    :after {
      left: 50%;
      transform: translate(-50%, -4px);
    }
  `,
  left: css`
    :before {
      top: 50%;
      border-right-width: 0;
      border-left-color: #4621ff;
      left: calc(0em - 5px);
      transform: translate(-8px, -50%);
    }
    :after {
      top: 50%;
      right: calc(100% + 5px);
      transform: translate(-8px, -50%);
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
    line-height: 1;
    font-size: 0.9em;
    pointer-events: none;
    position: absolute;
    box-sizing: border-box;
    display: none;
    opacity: 0;
  }
  :before {
    content: '';
    border: 5px solid transparent;
    z-index: 1;
  }
  :after {
    content: attr(data-tooltip);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    text-align: center;
    min-width: 3em;
    max-width: 21em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 6px 6px;
    border-radius: 4px;
    background: #fff;
    color: black;
    z-index: 1;
  }
  :hover:before,
  :hover:after {
    display: block;
    opacity: 1;
  }

  ${switchProp('variant', variants)}
`

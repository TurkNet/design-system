import styled, { css } from 'styled-components'
import { theme, switchProp } from 'styled-tools'

export const variants = {
  topCenter: css``,
  topLeft: css``,
  topRight: css``,
  right: css``,
  bottomCenter: css``,
  bottomLeft: css``,
  bottomRight: css``,
  left: css``,
}

export interface PopoverStyledProps {
  variant?: keyof typeof variants
}

export const PopoverStyled = styled.span<PopoverStyledProps>`
  display: inline-block;
  position: relative;
  border-bottom: 1px dotted #666;
  text-align: left;
  cursor: pointer;

  top: 250px; //delete
  left: 150px;

  .common {
    min-width: 121px;
    max-width: 500px;
    min-height: 28px;
    text-align: center;
    border-radius: 4px;
    position: absolute;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5); // delete
    z-index: 99999999;
    box-sizing: border-box;
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.8s;
  }

  .right {
    left: 100%;
    margin-left: 20px;
    top: 50%;
    transform: translate(0, -50%);
  }

  .left {
    top: 50%;
    right: 100%;
    margin-right: 20px;
    transform: translate(0, -50%);
  }

  .topLeft {
    bottom: 0;
    transform: translate(0, -40px);
  }

  .topCenter {
    bottom: 0;
    transform: translate(-25%, -40px);
  }

  .topRight {
    bottom: 0;
    transform: translate(-50%, -40px);
  }

  .bottomRight {
    top: 0;
    transform: translate(-50%, 40px);
  }

  .bottomLeft {
    top: 0;
    transform: translate(0, 40px);
  }

  .bottomCenter {
    top: 0;
    transform: translate(-25%, 40px);
  }

  :hover .common {
    visibility: visible;
    opacity: 1;
  }

  ${switchProp('variant', variants)}
`

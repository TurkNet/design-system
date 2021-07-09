import styled, { css } from 'styled-components'
import { borderRadius, switchProp } from '../../utility/styled'

export const variants = {
  topCenter: css`
    bottom: 0;
    transform: translate(-25%, -40px);
  `,
  topLeft: css`
    bottom: 0;
    transform: translateY(-40px);
  `,
  topRight: css`
    bottom: 0;
    transform: translate(-50%, -40px);
  `,
  right: css`
    left: calc(100% + 20px);
    top: 50%;
    transform: translateY(-50%);
  `,
  bottomCenter: css`
    top: 0;
    transform: translate(-25%, 40px);
  `,
  bottomLeft: css`
    top: 0;
    transform: translateY(40px);
  `,
  bottomRight: css`
    top: 0;
    transform: translate(-50%, 40px);
  `,
  left: css`
    top: 50%;
    right: calc(100% + 20px);
    transform: translateY(-50%);
  `,
}

export interface PopoverStyledProps {
  variant?: keyof typeof variants
}

export const Overlay = styled.div<PopoverStyledProps>`
  min-width: 121px;
  max-width: 500px;
  min-height: 28px;
  text-align: center;
  border-radius: ${borderRadius('normal')};
  position: absolute;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.5); // todo: will be delete
  z-index: 2;
  box-sizing: border-box;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.8s;

  ${switchProp('variant', variants)}
`

export const PopoverStyled = styled.div<PopoverStyledProps>`
  display: inline-block;
  position: relative;
  text-align: left;
  cursor: pointer;

  :hover ${Overlay} {
    visibility: visible;
    opacity: 1;
  }
`

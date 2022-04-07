import styled, { css } from 'styled-components'
import { borderRadius, switchProp, color, ifProp } from '../../utility/styled'
import { fadeIn } from '../../shared/animation'

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
  show?: boolean
}

export const Overlay = styled.dialog<PopoverStyledProps>`
  min-width: 121px;
  max-width: 500px;
  min-height: 28px;
  text-align: center;
  border-radius: ${borderRadius('normal')};
  background-color: ${color('grey.100')};
  border-color: transparent;
  box-sizing: border-box;

  opacity: ${ifProp('show', 1, 0)};
  visibility: ${ifProp('show', 'visible', 'hidden')};
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.3s ease;
  box-shadow: 0 2px 4px 0 rgba(16, 20, 38, 0.2);

  ${switchProp('variant', variants)}

  &:hover {
    opacity: 1;
    visibility: visible;
  }

  :after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: calc(100% + 40px);
    width: calc(100% + 40px);
  }
`

export const PopoverStyled = styled.div<PopoverStyledProps>`
  display: inline-block;
  position: relative;
  text-align: left;
  cursor: pointer;

  ${Overlay} :hover {
    opacity: 1;
    visibility: visible;
  }
`

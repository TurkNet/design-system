import styled, { css } from 'styled-components'
import ReactSelect from 'react-select'
import AsyncSelect from 'react-select/async'
import { SpaceProps, space as systemSpace } from 'styled-system'

import {
  color,
  fontSize,
  borderRadius,
  fontWeight,
  switchProp,
} from '../../utility/styled'

export interface InputStyledProps extends SpaceProps {
  variant?: keyof typeof variants
}

const variantStyle = (variant: string, secondary?: string) => css`
  border: 2px solid ${color(`${secondary || variant}.normal`)};
  &:hover {
    border: 2px solid ${color(`${secondary || variant}.normal`)};
  }

  &:focus,
  &:active,
  &--is-focused {
    border-color: ${color(`${variant}.dark`)} !important;

    ::placeholder {
      font-weight: ${fontWeight('semi-bold')};
    }
  }
`

const variants = {
  success: variantStyle('success'),
  info: variantStyle('info'),
  danger: variantStyle('danger'),
  warning: variantStyle('warning'),
  primary: variantStyle('primary', 'sky'),
}

const styledSelect = css`
  .select {
    &-container {
      ${systemSpace}
    }
    &__control {
      padding-left: 2px;
      padding-right: 2px;
      background-color: transparent;
      width: 100%;
      cursor: pointer;
      height: auto;
      min-height: 48px;
      font-size: ${fontSize('15')};
      color: ${color('grey.800')};
      border-radius: ${borderRadius('normal')};
      box-shadow: none;
      ${switchProp('variant', variants)};
      &:hover {
        background-color: ${color('grey.200')};
      }
      &--is-disabled {
        background-color: ${color('grey.300')};
        border: 2px solid ${color(`grey.400`)};
        .select__placeholder,
        .select__indicator {
          color: ${color(`grey.500`)};
        }
      }
      &--is-focused {
        font-weight: ${fontWeight('semi-bold')};
        color: ${color('grey.800')};
      }
      &--menu-is-open {
        .select__dropdown-indicator {
          svg {
            transform: rotate(180deg);
          }
        }
      }
    }
    &__input,
    &__single-value {
      color: ${color('grey.800')} !important;
    }
    &__placeholder {
      color: ${color('grey.600')};
    }
    &__indicator-separator {
      display: none;
    }
    &__menu {
      width: 100%;
      border-radius: 4px;
      border: solid 2px ${color('sky.light')};
      padding: 0;
      background-color: ${color('grey.100')};
      box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.03),
        -5px 5px 5px rgba(0, 0, 0, 0.03);
      position: absolute;
      z-index: 5;
      margin: 4px 0;
    }
    &__option {
      font-size: 15px;
      font-weight: 600;
      padding: 14px;
      border: none;
      cursor: pointer;
      content-visibility: auto;
      contain-intrinsic-size: 30px;
      &:hover {
        background-color: ${color('primary.light')};
        color: ${color('grey.100')};
      }
      &--is-selected {
        background-color: ${color('primary.normal')};
        color: ${color('grey.100')};
      }
    }
    &__multi-value {
      position: relative;
      color: ${color('grey.100')};
      height: 24px;
      padding: 0 16px;
      font-size: 12px;
      font-weight: 600;
      border: 2px solid;
      border-radius: ${borderRadius('normal')};
      display: inline-flex;
      align-items: center;
      background-color: ${color('primary.normal', 0.08)};
      border-color: ${color('primary.normal')};
      color: ${color('primary.normal')};
      ${switchProp('variant', variants)};
      ${systemSpace}
      * {
        color: currentColor;
      }
      > :last-child {
        margin-left: 6px;
        margin-right: -12px;
      }

      > :first-child {
        margin: 0;
      }
    }
    &__indicator {
      color: ${color('sky.dark')};
      svg {
        transition: transform 0.2s;
      }
    }
  }
`

export const SelectStyled = styled(ReactSelect)<InputStyledProps>`
  ${styledSelect}
`
export const SearchSelectStyled = styled(AsyncSelect)<InputStyledProps>`
  ${styledSelect}
`

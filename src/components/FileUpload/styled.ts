import styled, { css } from 'styled-components'
import {
  variant,
  flexbox,
  FlexboxProps,
  space,
  SpaceProps,
} from 'styled-system'
import { color, ifProp } from '../../utility/styled'

export const FlexStyled = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`

const variants = {
  success: {
    borderColor: 'success.normal',
    color: 'success.dark',
    fontWeight: 'semi-bold',
  },
  sky: {
    borderColor: 'sky.normal',
    color: 'sky.dark',
    fontWeight: 'semi-bold',
  },
  danger: {
    borderColor: 'danger.normal',
    color: 'danger.dark',
    fontWeight: 'semi-bold',
  },
}

export interface FileUploadStyledProps extends FlexboxProps, SpaceProps {
  inner?: boolean
  showLabel?: boolean
  variant: keyof typeof variants
}

export const FileUploadStyled = styled.div<FileUploadStyledProps>`
  min-height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: dashed 2px;
  border-radius: 4px;
  padding: 8px 12px;

  > span {
    font-size: 13px;
    padding-right: 10px;
    ${ifProp(
      { inner: true },
      css`
        @media (max-width: 480px) {
          padding-right: 0;
          padding-bottom: 16px;
        }
      `
    )}
    color: currentColor;
  }

  button {
    border-color: transparent;
    border-radius: 4px;
    background-color: ${color('grey.300')};
    padding: 8px 11px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
  }

  input {
    display: none;
  }

  ${ifProp(
    { inner: true },
    css`
      align-items: center;
      @media (max-width: 480px) {
        flex-direction: column;
        align-items: flex-start;
        > div {
          margin-top: 0;
          margin-bottom: 16px;
        }
        button {
          width: 100%;
        }
      }
      ${ifProp(
        { showLabel: false },
        css`
          flex-direction: row-reverse;
          > div {
            margin-top: 0;
            margin-left: 16px;
          }
          @media (max-width: 480px) {
            > div {
              margin-top: 0;
              margin-left: 0;
              margin-bottom: 16px;
            }
          }
        `
      )}
    `
  )}

  ${variant({ variants })}
  ${flexbox}
  ${space}
`

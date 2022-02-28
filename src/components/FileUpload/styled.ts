import styled from 'styled-components'
import { variant } from 'styled-system'
import { color } from '../../utility'
import { Flex } from '../Flex'

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

export const FileUploadStyled = styled.div<
  Record<'variant', 'success' | 'danger' | 'sky'>
>`
  height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: dashed 2px;
  border-radius: 4px;

  span {
    font-size: 13px;
    padding-right: 10px;
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

  ${variant({ variants })}
`

export const IconStyled = styled.div`
  cursor: pointer;
`

export const FileItem = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    width: 100%;
  }
`

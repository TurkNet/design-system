import styled from 'styled-components'
import { color } from '../../utility'

export const BreadCrumbStyled = styled.ol`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
`

export const BreadCrumbItemStyled = styled.li`
  display: flex;
  margin-right: 16px;
  color: ${color('grey.600')};
  align-items: center;
  *:hover {
    text-decoration: underline;
    cursor: pointer;
    color: ${color('primary.normal')};
  }
  &:last-child {
    color: ${color('primary.normal')};
  }
  &:not(:first-child) {
    margin-left: 8px;
    div {
      margin-left: 16px;
    }
    &:before {
      content: '›';
      color: ${color('grey.600')};
    }
  }
`

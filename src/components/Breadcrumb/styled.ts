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
  margin: auto 8px auto 16px;
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
  &:not(:first-child):before {
    content: '›';
    color: ${color('grey.600')};
  }
  &:first-child {
    div {
      margin-left: 0;
    }
  }
`

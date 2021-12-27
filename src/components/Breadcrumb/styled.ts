import styled from 'styled-components'
import { color } from '../../utility'

export const BreadCrumbStyled = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  align-items: center;
`

export const BreadCrumbItemStyled = styled.li`
  display: flex;
  margin: auto 8px auto 16px;
  color: ${color('grey.700')};
  opacity: 0.4;
  align-items: center;

  *:hover {
    text-decoration: underline;
  }

  &:last-child {
    color: ${color('primary.normal')};
    opacity: 1;
  }
  &:last-child:before {
    opacity: 0.4;
    color: ${color('grey.700')};
  }

  &:not(:first-child):before {
    content: '›';
    font-size: 16px;
    color: ${color('grey.700')};
  }
`

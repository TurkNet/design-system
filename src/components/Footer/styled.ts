import styled from 'styled-components'
import { ifProp, theme } from 'styled-tools'

export const FooterStyled = styled.div`
  width: 100%;
  background-color: ${theme('colors.grey.100')};
`

interface ContentStyledProps {
  dense?: boolean
}

export const ContentStyled = styled.div<ContentStyledProps>`
  padding: ${ifProp('dense', '30px 24px', '56px 24px')};
  border-bottom: 1px solid ${theme('colors.grey.300')};
`
export const TitleStyled = styled.div`
  color: inherit;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 16px;
`

export const LinkStyled = styled.a`
  color: inherit;
  text-decoration: none;
  display: block;
  padding: 8px 0;
  font-size: ${theme('fontSizes.15')};
  line-height: 20px;
`

export const SocialLinkStyled = styled.a`
  color: inherit;
  text-decoration: none;
  display: inline-block;
  margin-left: 35px;
  :first-child {
    margin: 0;
  }
`

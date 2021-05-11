import styled from 'styled-components'
import { space, layout } from 'styled-system'
import { theme } from 'styled-tools'

export const CardStyled = styled.div`
  border: 2px solid ${theme('colors.grey.400')};
  border-radius: ${theme('borderRadius.normal')};
  ${space}
  ${layout}
`

export const ImageStyled = styled.div`
  width: 100%;
  height: 230px;
  overflow: hidden;
  transform: scale(1.013);
  border-radius: 4px 4px 0 0;
  :empty {
    display: none;
  }
`

export const HeaderStyled = styled.div`
  padding: 16px 24px;
  border-bottom: 1px solid ${theme('colors.grey.300')};
`

export const TitleStyled = styled.div`
  font-size: ${theme('fontSizes.18')};
  font-weight: ${theme('fontWeights.semi-bold')};
`

export const SubtitleStyled = styled.div`
  font-size: ${theme('fontSizes.13')};
  font-weight: ${theme('fontWeights.semi-bold')};
  margin-top: ${theme('space.xxs')};
  :empty {
    margin-top: 0;
  }
`

export const ContentStyled = styled.div`
  padding: 14px 24px;
`

export const FooterStyled = styled.div`
  padding: 14px 24px;
  border-top: 1px solid ${theme('colors.grey.300')};
  font-size: ${theme('fontSizes.12')};
  font-weight: ${theme('fontWeights.semi-bold')};
  :empty {
    display: none;
  }
`

import styled from 'styled-components'
import { space as systemSpace, layout } from 'styled-system'
import {
  color,
  borderRadius,
  fontSize,
  fontWeight,
  space,
} from '../../utility/styled'

export const CardStyled = styled.div`
  border: 2px solid ${color('grey.400')};
  border-radius: ${borderRadius('normal')};
  ${systemSpace}
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
  border-bottom: 1px solid ${color('grey.300')};
`

export const TitleStyled = styled.div`
  font-size: ${fontSize('18')};
  line-height: 24px;
  font-weight: ${fontWeight('semi-bold')};
`

export const SubtitleStyled = styled.div`
  font-size: ${fontSize('13')};
  font-weight: ${fontWeight('semi-bold')};
  margin-top: ${space('space.xxs')};
  :empty {
    margin-top: 0;
  }
`

export const ContentStyled = styled.div`
  padding: 14px 24px;
  font-size: ${fontSize('15')};
  line-height: 20px;
`

export const FooterStyled = styled.div`
  padding: 14px 24px;
  border-top: 1px solid ${color('grey.300')};
  font-size: ${fontSize('12')};
  font-weight: ${fontWeight('semi-bold')};
  :empty {
    display: none;
  }
`

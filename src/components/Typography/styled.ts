import styled from 'styled-components'
import {
  typography,
  color,
  space,
  SpaceProps,
  ColorProps,
  TypographyProps,
  variant,
} from 'styled-system'
import { prop } from '../../utility/styled'

const variants = {
  h1: {
    fontSize: '36',
    fontWeight: 'semi-bold',
  },
  h2: {
    fontSize: '32',
    fontWeight: 'semi-bold',
  },
  h3: {
    fontSize: '30',
    fontWeight: 'bold',
  },
  h4: {
    fontSize: '26',
    fontWeight: 'bold',
  },
  h5: {
    fontSize: '22',
    fontWeight: 'semi-bold',
  },
  h6: {
    fontSize: '18',
    fontWeight: 'semi-bold',
  },
  subtitle1: {
    fontSize: '15',
    fontWeight: 'semi-bold',
  },
  subtitle2: {
    fontSize: '13',
    fontWeight: 'semi-bold',
  },
  paragraph1: {
    fontSize: '15',
  },
  paragraph2: {
    fontSize: '13',
  },
  caption1: {
    fontSize: '12',
  },
  caption2: {
    fontSize: '12',
    fontWeight: 'semi-bold',
  },
  label: {
    fontSize: '12',
    fontWeight: 'bold',
  },
}

export type IVariant = keyof typeof variants

export interface TypographyStyledProps
  extends TypographyProps,
    SpaceProps,
    ColorProps {
  variant?: IVariant
  color?: string
  cursor?: string
}

export const TypographyStyled = styled.div<TypographyStyledProps>`
  padding: 0;
  margin: 0;
  cursor: ${prop('cursor', 'default')};
  ${variant({ variants })};
  ${typography};
  ${color};
  ${space};
`

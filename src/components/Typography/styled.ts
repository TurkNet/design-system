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

const variants = {
  h1: {
    fontSize: '36',
    lineHeight: '48px',
    fontWeight: 'semi-bold',
  },
  h2: {
    fontSize: '32',
    lineHeight: '40px',
    fontWeight: 'semi-bold',
  },
  h3: {
    fontSize: '30',
    lineHeight: '40px',
    fontWeight: 'bold',
  },
  h4: {
    fontSize: '26',
    lineHeight: '32px',
    fontWeight: 'bold',
  },
  h5: {
    fontSize: '22',
    lineHeight: '32px',
    fontWeight: 'semi-bold',
  },
  h6: {
    fontSize: '18',
    lineHeight: '24px',
    fontWeight: 'semi-bold',
  },
  subtitle1: {
    fontSize: '15',
    lineHeight: '24px',
    fontWeight: 'regular',
  },
  subtitle2: {
    fontSize: '13',
    lineHeight: '24px',
    fontWeight: 'semi-bold',
  },
  paragraph1: {
    fontSize: '15',
    lineHeight: '20px',
  },
  paragraph2: {
    fontSize: '13',
    lineHeight: '18px',
  },
  caption1: {
    fontSize: '12',
    lineHeight: '16px',
  },
  caption2: {
    fontSize: '12',
    lineHeight: '16px',
    fontWeight: 'semi-bold',
  },
  label: {
    fontSize: '12',
    lineHeight: '16px',
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
}

export const TypographyStyled = styled('div')<TypographyStyledProps>(
  {
    padding: 0,
    margin: 0,
  },
  variant({ variants }),
  typography,
  color,
  space
)

import styled from 'styled-components';
import {
  typography,
  color,
  space,
  SpaceProps,
  ColorProps,
  TypographyProps,
  variant,
} from 'styled-system';

export type IVariant = keyof typeof variants;
export type IKind = keyof typeof kind;

export interface TypographyStyledProps
  extends TypographyProps,
    ColorProps,
    SpaceProps {
  variant?: IVariant;
  kind?: IKind;
}

const variants = {
  'display-big': {
    fontSize: '64',
    fontWeight: 'bold',
  },
  'display-small': {
    fontSize: '56',
    fontWeight: 'regular',
  },
  h1: {
    fontSize: '40',
    fontWeight: 'semi-bold',
  },
  h2: {
    fontSize: '32',
    fontWeight: 'semi-bold',
  },
  h3: {
    fontSize: '28',
    fontWeight: 'semi-bold',
  },
  h4: {
    fontSize: '24',
    fontWeight: 'semi-bold',
  },
  h5: {
    fontSize: '20',
    fontWeight: 'semi-bold',
  },
  h6: {
    fontSize: '16',
    fontWeight: 'semi-bold',
  },
  'body-big': {
    fontSize: '16',
    fontWeight: 'semi-bold',
  },
  'body-small': {
    fontSize: '14',
    fontWeight: 'regular',
  },
  subtitle: {
    fontSize: '16',
    fontWeight: 'regular',
  },
  'subtitle-small': {
    fontSize: '14',
    fontWeight: 'semi-bold',
  },
  caption: {
    fontSize: '12',
    fontWeight: 'semi-bold',
  },
  overline: {
    fontSize: '10',
    fontWeight: 'semi-bold',
  },
};

const kind = {
  dark: {
    color: 'grey.1000',
  },
  light: {
    color: 'text',
  },
};

export const TypographyStyled = styled('div')<TypographyStyledProps>(
  variant({ variants }),
  variant({ prop: 'kind', variants: kind }),
  typography,
  color,
  space
);

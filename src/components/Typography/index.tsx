import React, { FC } from 'react';
import { TypographyStyled, TypographyStyledProps } from './styled';

export type TypographyProps = TypographyStyledProps;

const tags: Record<string, any> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  overline: 'span',
  caption: 'span',
};

export const Typography: FC<TypographyProps> = ({ variant, ...props }) => {
  return (
    <TypographyStyled as={(variant && tags[variant]) || 'div'} {...props}>
      Turknet Styleguide
    </TypographyStyled>
  );
};

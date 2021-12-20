import React, { FC } from 'react'
import { TypographyStyled, TypographyStyledProps } from './styled'

export type TypographyProps = TypographyStyledProps

const tags = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  paragraph1: 'p',
  paragraph2: 'p',
  caption1: 'span',
  caption2: 'span',
  label: 'label',
  span: 'span',
}

export const Typography: FC<TypographyProps> = ({
  variant = 'paragraph1',
  children,
  cursor,
  ...props
}) => {
  return (
    <TypographyStyled
      as={tags[variant] as any}
      variant={variant}
      cursor={cursor}
      {...props}
    >
      {children}
    </TypographyStyled>
  )
}

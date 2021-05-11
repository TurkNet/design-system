import React, { FC, ReactNode } from 'react'
import type { SpaceProps, LayoutProps } from 'styled-system'
import {
  CardStyled,
  ImageStyled,
  HeaderStyled,
  TitleStyled,
  SubtitleStyled,
  ContentStyled,
  FooterStyled,
} from './styled'

export interface CardProps extends SpaceProps, LayoutProps {
  title?: string | ReactNode
  subtitle?: string | ReactNode
  content?: string | ReactNode
  footer?: string | ReactNode
  image?: ReactNode
}

export const Card: FC<CardProps> = ({
  title,
  subtitle,
  content,
  footer,
  image,
  ...props
}) => {
  return (
    <CardStyled {...props}>
      <ImageStyled>{image}</ImageStyled>
      <HeaderStyled>
        <TitleStyled>{title}</TitleStyled>
        <SubtitleStyled>{subtitle}</SubtitleStyled>
      </HeaderStyled>
      <ContentStyled>{content}</ContentStyled>
      <FooterStyled>{footer}</FooterStyled>
    </CardStyled>
  )
}

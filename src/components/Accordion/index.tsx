import React, { FC } from 'react'
import AccordionItem from './AccordionItem'
import { BoxProps } from '../Box'
import { AccourdionStyled } from './styled'

export type AccordionProps = BoxProps

const Accordion: FC<AccordionProps> = ({ children, ...props }) => {
  return <AccourdionStyled {...props}>{children}</AccourdionStyled>
}

export { Accordion, AccordionItem }

import React, { FC } from 'react'
import AccordionItem from './AccordionItem'
import { BoxProps } from '../Box'
import { AccordionStyled } from './styled'

export type AccordionProps = BoxProps

const Accordion: FC<AccordionProps> = ({ children, ...props }) => {
  return <AccordionStyled {...props}>{children}</AccordionStyled>
}

export { Accordion, AccordionItem }

import React, { FC } from 'react'
import AccordionItem from './AccordionItem'
import { Box, BoxProps } from '../Box'

export type AccordionProps = BoxProps

const Accordion: FC<AccordionProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}

export { Accordion, AccordionItem }

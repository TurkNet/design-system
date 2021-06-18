import React, { FC } from 'react'
import AccordionItem, { AccordionItemProps } from './AccordionItem'
import { Box, BoxProps } from '../Box'

export type AccordionProps = BoxProps
export type { AccordionItemProps }

const Accordion: FC<AccordionProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>
}

export { Accordion, AccordionItem }

import React, { FC } from 'react'
import { Box, BoxProps } from '../Box'
import { CollapseStyled, CollapseProp } from './styled'

export type CollapseProps = BoxProps & CollapseProp

export const Collapse: FC<CollapseProps> = ({
  children,
  expanded,
  ...props
}) => {
  return (
    <CollapseStyled expanded={expanded}>
      <Box {...props}>{children}</Box>
    </CollapseStyled>
  )
}

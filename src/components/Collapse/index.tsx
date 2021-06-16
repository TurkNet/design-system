import React, { FC, useRef, useEffect } from 'react'
import { Box, BoxProps } from '../Box'
import { CollapseStyled } from './styled'

export interface CollapseProps extends BoxProps {
  expanded?: boolean
}

export const Collapse: FC<CollapseProps> = ({
  children,
  expanded,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.style.maxHeight = expanded
        ? `${ref.current?.scrollHeight}px`
        : '0px'
    }
  }, [expanded])

  return (
    <CollapseStyled ref={ref}>
      <Box {...props}>{children}</Box>
    </CollapseStyled>
  )
}

import React, { FC, useRef, useEffect } from 'react'
import { Box } from '../Box'
import { CollapseStyled, CollapseProps } from './styled'

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
  })

  return (
    <CollapseStyled ref={ref} expanded={expanded}>
      <Box {...props}>{children}</Box>
    </CollapseStyled>
  )
}

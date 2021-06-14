import React, { FC, useRef, useEffect } from 'react'
import { Box, BoxProps } from '../Box'
import { CollapseStyled } from './styled'

export interface CollapseProps extends BoxProps {
  opened?: boolean
}

export const Collapse: FC<CollapseProps> = ({ children, opened, ...props }) => {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) {
      ref.current.style.maxHeight = opened
        ? `${ref.current?.scrollHeight}px`
        : '0px'
    }
  }, [opened])

  return (
    <CollapseStyled ref={ref}>
      <Box {...props}>{children}</Box>
    </CollapseStyled>
  )
}

import React, { FC } from 'react'
import { Box } from '../Box'
import { BreadCrumbItemStyled } from './styled'

export interface BreadcrumbItemProps {
  label?: string
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ children, label }) => (
  <BreadCrumbItemStyled>
    <Box>{label || children}</Box>
  </BreadCrumbItemStyled>
)

export default BreadcrumbItem

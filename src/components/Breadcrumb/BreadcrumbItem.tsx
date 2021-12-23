import React, { FC } from 'react'
import { Typography } from '../Typography'
import { BreadCrumbItemStyled } from './styled'

export interface BreadcrumbItemProps {
  label?: string
  homeIcon?: boolean
}

const BreadcrumbItem: FC<BreadcrumbItemProps> = ({ children, label }) => {
  return (
    <BreadCrumbItemStyled>
      <Typography ml={16} variant="span">
        {label || children}
      </Typography>
    </BreadCrumbItemStyled>
  )
}

export default BreadcrumbItem

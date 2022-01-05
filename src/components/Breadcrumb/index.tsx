import React, { FC } from 'react'
import BreadcrumbItem from './BreadcrumbItem'
import { BreadCrumbStyled } from './styled'

const Breadcrumb: FC = ({ children }) => (
  <nav aria-label="breadcrumbs">
    <BreadCrumbStyled>{children}</BreadCrumbStyled>
  </nav>
)

export { Breadcrumb, BreadcrumbItem }

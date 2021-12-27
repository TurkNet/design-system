import React, { FC } from 'react'
import BreadcrumbItem from './BreadcrumbItem'
import { BreadCrumbStyled } from './styled'
import { Icon } from '../Icon'

export interface BreadcrumbProps {
  homeIcon?: boolean
}

const Breadcrumb: FC<BreadcrumbProps> = ({ homeIcon, children }) => {
  return (
    <BreadCrumbStyled>
      {homeIcon && (
        <BreadcrumbItem homeIcon={homeIcon}>
          <Icon name="home" />
        </BreadcrumbItem>
      )}
      {children}
    </BreadCrumbStyled>
  )
}

export { Breadcrumb, BreadcrumbItem }

import React, { useState, FC, ReactNode, useEffect } from 'react'
import { Collapse } from '../Collapse'
import { Icon } from '../Icon'
import { FlexProps } from '../Flex'
import { BorderStyled, SummaryStyled } from './styled'
import { noop } from '../../utility'

export interface AccordionItemProps extends FlexProps {
  summary: ReactNode
  id?: string
  expandIconSize?: number
  expandedId?: string
  defaultExpanded?: boolean
  expandIcon?: [closeIcon: string, openIcon?: string]
  expandIconColor?: [openIconColor: string, closeIconColor?: string]
  hasBorder?: boolean
  className?: string
  onExpand?: (expandedId: string) => void
  onToggle?: (expanded?: boolean) => void
}

const AccordionItem: FC<AccordionItemProps> = ({
  summary,
  children,
  defaultExpanded = false,
  expandedId,
  id,
  expandIcon = ['expand_less', 'expand_more'],
  expandIconColor = [],
  expandIconSize = 24,
  hasBorder = false,
  className,
  onExpand = noop,
  onToggle = noop,
  ...props
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded)

  useEffect(() => {
    setExpanded(defaultExpanded)
  }, [defaultExpanded])

  useEffect(() => {
    if (expandedId && id) setExpanded(expandedId === id)
  }, [expandedId, id])

  const handleExpanded = () => {
    if (id) {
      onExpand(id)
    } else {
      onToggle(!expanded)
      setExpanded(!expanded)
    }
  }

  const [closeIcon, openIcon] = expandIcon
  const [openIconColor, closeIconColor] = expandIconColor

  return (
    <BorderStyled
      className={className}
      hasBorder={hasBorder}
      expanded={expanded}
      bg={openIconColor}
    >
      <SummaryStyled {...props} expanded={expanded} onClick={handleExpanded}>
        {summary}
        <Icon
          name={expanded ? closeIcon : openIcon || closeIcon}
          color={expanded ? openIconColor : closeIconColor}
          size={expandIconSize}
        />
      </SummaryStyled>
      <Collapse expanded={expanded}>{children}</Collapse>
    </BorderStyled>
  )
}

export default AccordionItem

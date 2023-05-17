import React, { useState, FC, ReactNode, useEffect } from 'react'
import { Collapse } from '../Collapse'
import { Icon } from '../Icon'
import { FlexProps } from '../Flex'
import { SummaryStyled } from './styled'
import { noop } from '../../utility'

interface AccordionItemProps extends FlexProps {
  summary: ReactNode
  id?: string
  expandedId?: string
  defaultExpanded?: boolean
  onExpand?: (expandedId: string) => void
  onToggle?: (expanded?: boolean) => void
}

const AccordionItem: FC<AccordionItemProps> = ({
  summary,
  children,
  defaultExpanded = false,
  expandedId,
  id,
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

  return (
    <div>
      <SummaryStyled {...props} onClick={handleExpanded}>
        {summary}
        <Icon name={expanded ? 'expand_less' : 'expand_more'} />
      </SummaryStyled>
      <Collapse expanded={expanded}>{children}</Collapse>
    </div>
  )
}

export default AccordionItem

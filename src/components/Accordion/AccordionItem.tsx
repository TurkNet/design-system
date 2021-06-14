import React, { useState, FC, ReactNode, useEffect } from 'react'
import { Collapse } from '../Collapse'
import { Icon } from '../Icon'
import { FlexProps } from '../Flex'
import { SummaryStyled } from './styled'
import { noop } from '../../utility'

interface AccordionItemProps extends FlexProps {
  defaultExpanded?: boolean
  id?: string
  expandedId?: string
  summary: ReactNode
  onExpand: () => void
}

const AccordionItem: FC<AccordionItemProps> = ({
  summary,
  children,
  defaultExpanded = false,
  expandedId,
  id,
  onExpand = noop,
  ...props
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded)

  useEffect(() => {
    if (expandedId && id) setExpanded(expandedId === id)
  }, [expandedId, id])

  const handleExpanded = () => {
    if (id) {
      onExpand(id)
    } else {
      setExpanded(!expanded)
    }
  }

  return (
    <>
      <SummaryStyled {...props} onClick={handleExpanded}>
        {summary}
        <Icon name={expanded ? 'expand_less' : 'expand_more'} />
      </SummaryStyled>
      <Collapse expanded={expanded}>{children}</Collapse>
    </>
  )
}

export default AccordionItem

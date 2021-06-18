import React, { useState, FC, ReactNode, useEffect } from 'react'
import { Collapse } from '../Collapse'
import { Icon } from '../Icon'
import { FlexProps } from '../Flex'
import { SummaryStyled, BorderStyled } from './styled'
import { noop } from '../../utility'

export interface AccordionItemProps extends FlexProps {
  id?: string
  expandedId?: string
  summary: ReactNode
  underline?: boolean
  defaultExpanded?: boolean
  onExpand?: (expandedId: string) => void
}

const AccordionItem: FC<AccordionItemProps> = ({
  id,
  summary,
  children,
  expandedId,
  defaultExpanded = false,
  underline = false,
  onExpand = noop,
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
      <BorderStyled expanded={expanded} hidden={!underline} />
    </>
  )
}

export default AccordionItem

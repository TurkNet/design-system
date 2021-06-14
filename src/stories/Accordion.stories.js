import React, { useState } from 'react'
import { Accordion, AccordionItem, Typography } from '../components'

export default {
  title: 'Design System/Accordion',
  component: Accordion,
}

export const Standard = props => {
  return (
    <Accordion {...props}>
      <AccordionItem defaultExpanded summary="Başlık 1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem summary="Başlık 2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem summary="Başlık 3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
    </Accordion>
  )
}

export const Controlled = props => {
  const [expanded, setExpanded] = useState('acc-1')

  const handleExpand = accordionId => {
    setExpanded(accordionId === expanded ? null : accordionId)
  }

  return (
    <Accordion {...props}>
      <AccordionItem
        id="acc-1"
        summary={<Typography fontWeight="bold">Başlık 1</Typography>}
        onExpand={handleExpand}
        expandedId={expanded}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem
        id="acc-2"
        summary={<Typography fontWeight="bold">Başlık 2</Typography>}
        onExpand={handleExpand}
        expandedId={expanded}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem
        id="acc-3"
        summary={<Typography fontWeight="bold">Başlık 3</Typography>}
        onExpand={handleExpand}
        expandedId={expanded}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
    </Accordion>
  )
}

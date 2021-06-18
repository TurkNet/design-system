import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { Accordion, AccordionProps, AccordionItem } from '../components'

export default {
  title: 'Design System/Accordion',
  component: Accordion,
}

const StandartTemplate: Story<AccordionProps> = props => (
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

export const Standart = StandartTemplate.bind({})

const ControlledTemplate: Story<AccordionProps> = props => {
  const [expanded, setExpanded] = useState('acc-1')

  const handleExpand = (expandedId: string) => {
    setExpanded(expandedId === expanded ? '' : expandedId)
  }

  return (
    <Accordion {...props}>
      <AccordionItem
        id="acc-1"
        summary="Başlık 1"
        onExpand={handleExpand}
        expandedId={expanded}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem
        id="acc-2"
        summary="Başlık 2"
        onExpand={handleExpand}
        expandedId={expanded}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem
        id="acc-3"
        summary="Başlık 3"
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

export const Controlled = ControlledTemplate.bind({})

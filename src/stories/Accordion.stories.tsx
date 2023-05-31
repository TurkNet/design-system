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
    <AccordionItem summary="Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık 2 Başlık ">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
      voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
      voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
      voluptate distinctio hic esse suscipit porro officiis et dolores minima.s
    </AccordionItem>
    <AccordionItem summary="Başlık 3">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
      voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
      voluptate distinctio hic esse suscipit porro officiis et dolores minima.
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
        expandedId={expanded}
        onExpand={handleExpand}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem
        id="acc-11"
        summary="Başlık 11"
        expandedId={expanded}
        onExpand={handleExpand}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem
        id="acc-113"
        summary="Başlık 1133333"
        expandedId={expanded}
        onExpand={handleExpand}
        hasBorder
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem
        id="acc-2"
        summary="Başlık 2"
        expandIcon={['unfold_less', 'unfold_more']}
        expandIconColor={['success.normal', 'sky.dark']}
        expandedId={expanded}
        onExpand={handleExpand}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem
        id="acc-3"
        summary="Başlık 3"
        expandIconColor={['info.normal', 'sky.dark']}
        expandedId={expanded}
        onExpand={handleExpand}
        hasBorder
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit
        voluptate distinctio hic esse suscipit porro officiis et dolores minima.
      </AccordionItem>
      <AccordionItem
        id="acc-4"
        summary="Başlık 4"
        expandIcon={['unfold_more']}
        expandIconColor={['success.normal', 'sky.dark']}
        expandedId={expanded}
        onExpand={handleExpand}
        hasBorder
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

import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { Button, Collapse, CollapseProps } from '../components'

export default {
  title: 'Design System/Collapse',
  component: Collapse,
}

const Template: Story<CollapseProps> = args => {
  const [expanded, setExpanded] = useState(false)
  const [show, setShow] = useState(false)
  return (
    <>
      <Button onClick={() => setExpanded(!expanded)}>Aç/Kapa</Button>
      <Collapse {...args} expanded={expanded}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Itaque velit voluptate distinctio hic
          esse suscipit porro officiis et dolores minima. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Itaque velit voluptate distinctio
          hic esse suscipit porro officiis et dolores minima. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Itaque velit voluptate
          distinctio hic esse suscipit porro officiis et dolores minima
        </p>
        <button type="button" onClick={() => setShow(p => !p)}>
          {!show ? 'show' : 'hide'}
        </button>
        {show && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            sequi doloremque, consequatur beatae nihil eaque maxime! Officia
            incidunt ad dolores dolore inventore consequatur odio. Ad, sint sit?
            Amet, sit veniam. Iure sequi ipsum doloribus ea porro. Quaerat eaque
            perspiciatis corrupti numquam atque suscipit laudantium ipsa
            dignissimos asperiores! Perspiciatis expedita veritatis, quo fuga
            molestiae a dolores enim rerum accusantium, quae nihil. Tenetur
            aliquid earum error, iusto excepturi ad odio totam labore. Accusamus
            dolorem, fuga laborum doloribus eum, pariatur labore asperiores
            repellat mollitia eos est voluptate maxime provident minus tenetur
            placeat! Fugit.
          </p>
        )}
      </Collapse>
    </>
  )
}

export const Standart = Template.bind({})
Standart.args = {
  padding: 'xl',
}

import React from 'react'
import { Story } from '@storybook/react'
import { Flex, Box, Carousel, CarouselProps } from '../components'

export default {
  title: 'Design System/Carousel',
  component: Carousel,
}

const Slide = () => (
  <Flex height="500px" alignItems="center" justifyContent="center">
    <img
      alt="slide"
      height="100%"
      width="100%"
      style={{ objectFit: 'cover' }}
      src="https://ekstremtatil.com/wp-content/themes/adventure-tours/assets/images/placeholder.png"
    />
  </Flex>
)

const Template: Story<CarouselProps> = props => {
  return (
    <Box width="500px" mx="100px">
      <Carousel {...props}>
        <Slide />
        <Slide />
        <Slide />
        <Slide />
        <Slide />
      </Carousel>
    </Box>
  )
}

export const Standart = Template.bind({})

Standart.args = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  dots: true,
  arrows: true,
  variant: 'standart',
}

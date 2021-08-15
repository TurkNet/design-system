import React from 'react'
import Slider from 'react-slick'
import type { Settings } from 'react-slick'
import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'
import { SlickSliderCss, SlickSliderCssProps } from './styled'

export interface CarouselProps extends Settings, SlickSliderCssProps {}

export class Carousel extends React.PureComponent<CarouselProps> {
  slider: React.RefObject<Slider>

  constructor(props: CarouselProps) {
    super(props)
    this.slider = React.createRef()
  }

  onNext = () => {
    if (this.slider.current) {
      this.slider.current.slickNext()
    }
  }

  onPrevious = () => {
    if (this.slider.current) {
      this.slider.current.slickPrev()
    }
  }

  render() {
    const { children, speed = 300, variant = 'standart', ...props } = this.props

    return (
      <>
        <Slider
          speed={speed}
          {...props}
          nextArrow={<NextArrow />}
          prevArrow={<PrevArrow />}
          ref={this.slider}
        >
          {children}
        </Slider>
        <SlickSliderCss variant={variant} />
      </>
    )
  }
}

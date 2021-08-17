import styled, { createGlobalStyle } from 'styled-components'
import { switchProp, color } from '../../utility/styled'
import { Flex } from '../Flex'

export const ArrowStyled = styled(Flex)`
  cursor: pointer;
`

export interface SlickSliderCssProps {
  variant: keyof typeof variants
}

const variants = {
  standart: ``,
  compact: `
  .slick-dots {
    position: absolute;
    bottom: 40px;
  }
  `,
  inner: `
  .slick-dots {
    position: absolute;
    bottom: 40px;
  }

  .slick-prev,
  .slick-next {
    top: inherit;
    width: 48px;
    height: 48px;
    z-index: 1;
    transform: none;
    background-color: ${color('grey.100')};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .slick-prev {
    bottom: 20px;
    left: 20px;
  }
  .slick-next {
    right: inherit;
    bottom: 20px;
    left: 70px;
  }
  .material-icons {
    font-size: 20px;
  }

  .slick-next:focus,
  .slick-next:hover,
  .slick-prev:focus,
  .slick-prev:hover {
    outline: 0;
    background: ${color('grey.100')};
  }
  `,
}

export const SlickSliderCss = createGlobalStyle<SlickSliderCssProps>`
.slick-list,
.slick-slider,
.slick-track {
  position: relative;
  display: block;
}

.slick-loading .slick-slide,
.slick-loading .slick-track {
  visibility: hidden;
}
.slick-slider {
  box-sizing: border-box;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.slick-list:focus {
  outline: 0;
}
.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}
.slick-slider .slick-list,
.slick-slider .slick-track {
  transform: translate3d(0, 0, 0);
}
.slick-track {
  top: 0;
  left: 0;
}
.slick-track:after,
.slick-track:before {
  display: table;
  content: '';
}
.slick-track:after {
  clear: both;
}
.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
  cursor: pointer;
}

.slick-slide * {
  outline: none;
}

.slick-slide img {
  display: block;
}
.slick-slide.slick-loading img {
  display: none;
}
.slick-slide.dragging img {
  pointer-events: none;
}
.slick-initialized .slick-slide {
  display: block;
}
.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
  display: none;
}

.slick-dots,
.slick-next,
.slick-prev {
  position: absolute;
  display: block;
  padding: 0;
}

.slick-next,
.slick-prev {
  top: calc(50% - 20px);
  width: 20px;
  height: 20px;
  transform: translate(0, -50%);
  cursor: pointer;
  border: none;
  outline: 0;
  background: 0 0;
}
.slick-next:focus,
.slick-next:hover,
.slick-prev:focus,
.slick-prev:hover {
  outline: 0;
  background: 0 0;
}

.slick-next.slick-disabled:before,
.slick-prev.slick-disabled:before {
  opacity: 0.25;
}

.slick-prev {
  left: -50px;
}
.slick-next {
  right: -50px;
}


.slick-dotted.slick-slider {
  margin-bottom: 30px;
}
.slick-dots {
  position: relative;
  bottom: 0;
  width: 100%;
  margin: 0;
  list-style: none;
  text-align: center;
}
.slick-dots li {
  position: relative;
  display: inline-block;
  width: 6px;
  height: 6px;
  margin: 0 5px;
  padding: 0;
  cursor: pointer;
}
.slick-dots li button {
  display: block;
  width: 6px;
  height: 6px;
  cursor: pointer;
  color: transparent;
  background-color: ${color('primary.light', 0.2)};
  border-radius: 6px;
  border: 0;
  outline: 0;
  padding: 0;
  font-size: 0;
  line-height: 0;
}

.slick-dots li.slick-active button {
  background-color: ${color('primary.normal')};
}

${switchProp('variant', variants)}
`
